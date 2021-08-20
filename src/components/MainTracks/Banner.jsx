import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFav } from '../../redux/actions';
import {
  Album,
  Button,
  Buttons,
  StyledPause,
  StyledPlay,
  StyledHeart,
  Info,
  Title,
  Time,
  ArtistLink,
  AlbumLink,
  AlbumImage,
} from './StyledComponents/StyledBanner';

class Banner extends Component {
  render () {
    const {
      name,
      artist,
      cover,
      link,
      preview,
      duration,
      toggleFavSong,
      id,
      favs,
      albumId,
    } = this.props;

    const audio = new Audio(preview);
    const minutes = Math.floor(duration/60);
    const seconds = Math.floor(((duration/60) - minutes)*60);
    const time = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;
    const albumLink = `https://www.deezer.com/br/album/${albumId}`;

    return (
      <Album>
        <AlbumLink
          href={ albumLink }
          target="_blank"
          rel="noreferrer"
        >
          <AlbumImage
            src={ cover }
            alt={ name }
          />
        </AlbumLink>
        <Buttons>
          <Button 
            type="button" 
            onClick={ () => audio.play() }
          >
            <StyledPlay />
          </Button> 
          <Button 
            type="button" 
            onClick={ () => audio.pause() }
          >
            <StyledPause />
          </Button>
          <Button 
          onClick={ () => toggleFavSong(this.props) }
        >
          <StyledHeart
            bool={ favs.some((fav) => fav.id === id) }
          />
        </Button>
        </Buttons>
        <Info>
          <Title>{ name }</Title>
          <Time>{ time }</Time>
          <ArtistLink
            href={ link }
            target="_blank"
            rel="noreferrer"
            >
          <p>{artist}</p>
          </ArtistLink>
        </Info>

      </Album>
    )
  }
}

const mapStateToProps = (state) => ({
  playing: state.statePlaylist.playing,
  favs: state.user.favs,
})

const mapDispatchToProps = (dispatch) => ({
  toggleFavSong: (song) => dispatch(toggleFav(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);