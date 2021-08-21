import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleFav } from '../../redux/actions';
import Player from '../Player';
import {
  Album,
  Button,
  Buttons,
  StyledHeart,
  Info,
  Title,
  Time,
  AlbumLink,
  AlbumImage,
  Link,
} from './StyledComponents/StyledBanner';

class Banner extends Component {
  render () {
    const {
      name,
      artist,
      cover,
      artistLink,
      preview,
      duration,
      toggleFavSong,
      id,
      favs,
      albumId,
      MusicLink,
    } = this.props;

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
          <Player preview={ preview } />
          <Button
            type="button"
            onClick={ () => toggleFavSong(this.props) }
        >
          <StyledHeart
            bool={ favs.some((fav) => fav.id === id) }
          />
        </Button>
        </Buttons>
        <Info>
          <Link
            href={ MusicLink }
            target="_blank"
            rel="noreferrer"
          >
            <Title>{ name }</Title>
          </Link>
          <Time>{ time }</Time>
          <Link
            href={ artistLink }
            target="_blank"
            rel="noreferrer"
            >
          <p>{artist}</p>
          </Link>
        </Info>

      </Album>
    )
  }
}

const mapStateToProps = (state) => ({
  favs: state.user.favs,
})

const mapDispatchToProps = (dispatch) => ({
  toggleFavSong: (song) => dispatch(toggleFav(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);