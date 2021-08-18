import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import styled from 'styled-components';

const Main = styled.div`
  display:flex;
`

class MainTracks extends Component {
  render () {
    const { content } = this.props;
    return (
      <div>
        <h2>As mais tocadas</h2>
        <Main>
          {content !== [] && content.tracks.data.map((track) => 
            <Banner 
              name={ track.title }
              artist={ track.artist.name }
              id={ track.id }
              image={ track.artist.picture }
              link={ track.artist.link }
              preview={ track.preview }
            />
          )}
        </Main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  content: state.statePlaylist.playlist,
  loading: state.statePlaylist.loading,
})

export default connect(mapStateToProps)(MainTracks);