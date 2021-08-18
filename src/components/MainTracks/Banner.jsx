import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { togglePlay } from '../../redux/actions'

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
    const { name, artist, image, link, preview, number_tracks, duration } = this.props;
    const minutes = Math.floor(duration/60);
    const seconds = Math.floor(((duration/60) - minutes)*60)
    const time = `${minutes}:${seconds}`;
    return (
      <Album>
        <button
          type="button"
          onClick={ () => this.playSound(preview) }
        >
          <img src={ image } alt={ name } />
        </button>
        { !artist ? null : <h3>{ name }</h3> }
        { !duration ? null : <p>{ time }</p> }
        { !number_tracks ? null : <p>{`${number_tracks} músicas`}</p> }
        <a
          href={ link }
          target="_blank"
          rel="noreferrer"
          >
        {artist === undefined ? <p>{ name }</p> : <p>{`Por ${artist}`}</p>}
        </a>
        <button type="button">Adicionar aos favoritos</button>
      </Album>
    )
  }
}

const mapStateToProps = (state) => ({
  playing: state.statePlaylist.playing,
})

const mapDispatchToProps = (dispatch) => ({
  togglePlaying: () => dispatch(togglePlay())
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);