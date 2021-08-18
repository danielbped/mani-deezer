import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../Loading'
import styled from 'styled-components';
import Banner from './Banner';


const Main = styled.div`
  display:flex;
`

const Title = styled.h2`
  margin:1rem;
`



class MainTracks extends Component {
  render () {
    const { loading, content } = this.props;
    if(loading) return <Loading />;
    return (
      <div>
        <Title>As mais tocadas</Title>
        <Main>
          {content !== [] && content.data.map((track) => 
            <Banner 
              name={ track.title }
              artist={ track.artist.name }
              id={ track.id }
              image={ track.album.cover }
              link={ track.artist.link }
              preview={ track.preview }
              duration={ track.duration }
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