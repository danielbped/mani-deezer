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
  StyledLink,
} from './StyledComponents/StyledBanner';

class Banner extends Component {
  handleFavsStorage = (song) => {
    const prevStorage = localStorage.getItem('favs');
    if(!prevStorage) return localStorage.setItem('favs', JSON.stringify([song]));
    const parsedPrevStorage = JSON.parse(localStorage.getItem('favs'));
    parsedPrevStorage.some(
      (fav) => fav.id === song.id) ?
        localStorage.setItem('favs', JSON.stringify([...parsedPrevStorage.filter((fav) => fav.id !== song.id)]))
        : localStorage.setItem('favs', JSON.stringify([...parsedPrevStorage, song]));
  };

  handleClick = (song) => {
    const { toggleFavSong } = this.props;
    toggleFavSong(song);
    this.handleFavsStorage(song);
  }

  render () {
    const {
      name,
      artist,
      cover,
      artistLink,
      preview,
      duration,
      id,
      albumId,
      MusicLink,
      stateFavs
    } = this.props;

    const minutes = Math.floor(duration/60);
    const seconds = Math.floor(((duration/60) - minutes)*60);
    const time = `${minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;
    const albumLink = `https://www.deezer.com/br/album/${albumId}`;
    const favs = JSON.parse(localStorage.getItem('favs'));
    

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
            onClick={ () => this.handleClick(this.props) }
        >
          <StyledHeart
            bool={ stateFavs.some((fav) => fav.id === id) || favs.some((fav) => fav.id === id) }
          />
        </Button>
        </Buttons>
        <Info>
          <StyledLink
            href={ MusicLink }
            target="_blank"
            rel="noreferrer"
          >
            <Title>{ name }</Title>
          </StyledLink>
          <Time>{ time }</Time>
          <StyledLink
            href={ artistLink }
            target="_blank"
            rel="noreferrer"
            >
          <p>{artist}</p>
          </StyledLink>
        </Info>

      </Album>
    )
  }
}

const mapStateToProps = (state) => ({
  stateFavs: state.user.favs,
})

const mapDispatchToProps = (dispatch) => ({
  toggleFavSong: (song) => dispatch(toggleFav(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);