import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';

class MainTracks extends Component {
  render () {
    const { content } = this.props;
    return (
      <div>
        {content !== [] && content.tracks.data.map((track) => 
          <Banner 
            name={ track.title }
            artist={ track.artist.name }
            id={ track.id }
            image={ track.artist.picture }
            link={ track.artist.link }
            preview={ track.preview }
            title="As mais tocadas"
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  content: state.statePlaylist.playlist,
  loading: state.statePlaylist.loading,
})

export default connect(mapStateToProps)(MainTracks);