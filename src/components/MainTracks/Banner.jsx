import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { toggleFav } from '../../redux/actions'
import FavIcon from '../FavIcon';

const Album = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 15%
`

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
      favs
    } = this.props;

    const audio = new Audio(preview);
    const minutes = Math.floor(duration/60);
    const seconds = Math.floor(((duration/60) - minutes)*60)
    const time = `${minutes}:${seconds}`;
    
    return (
      <Album>
        <img src={ cover } alt={ name } />
        <button type="button" onClick={ () => audio.play() }>Ouvir</button> 
        <button type="button" onClick={ () => audio.pause() }>Pausar</button>
        <h3>{ name }</h3>
        <p>{ time }</p>
        <a
          href={ link }
          target="_blank"
          rel="noreferrer"
          >
        <p>{`Por ${artist}`}</p>
        </a>
        <FavIcon onClick={ () => toggleFavSong(this.props) } bool={ favs.some((fav) => fav.id === id) } />
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