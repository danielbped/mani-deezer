import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { togglePlay, addFav, removeFav } from '../../redux/actions'

const Album = styled.div`
  margin: 1rem;
`

class Banner extends Component {
  playSound = (preview) => {
    const { togglePlaying, playing } = this.props;
    const audio = new Audio(preview);
    playing ? audio.pause() : audio.play();
    togglePlaying();
  }
  
  render () {
    const {
      name,
      artist,
      cover,
      link,
      preview,
      duration,
      addFavSong,
      removeFromFavs,
      onClick,
      id
    } = this.props;

    const minutes = Math.floor(duration/60);
    const seconds = Math.floor(((duration/60) - minutes)*60)
    const time = `${minutes}:${seconds}`;
    return (
      <Album>
        <button
          type="button"
          onClick={ () => this.playSound(preview) }
        >
          <img src={ cover } alt={ name } />
        </button>
        <h3>{ name }</h3>
        <p>{ time }</p>
        <a
          href={ link }
          target="_blank"
          rel="noreferrer"
          >
        <p>{`Por ${artist}`}</p>
        </a>
        <button
          type="button"
          onClick={ !onClick ? () => addFavSong(this.props) : () => removeFromFavs(id)}
        >
          Adicionar aos favoritos
        </button>
      </Album>
    )
  }
}

const mapStateToProps = (state) => ({
  playing: state.statePlaylist.playing,
})

const mapDispatchToProps = (dispatch) => ({
  togglePlaying: () => dispatch(togglePlay()),
  addFavSong: (song) => dispatch(addFav(song)),
  removeFromFavs: (id) => dispatch(removeFav(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);