import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';
import Header from '../components/Header';
import MainTracks from '../components/MainTracks/MainTracks';

const PLAYLIST_API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0';

class Main extends Component {
  componentDidMount() {
    const { getPlaylistFromProps } = this.props;
    getPlaylistFromProps(PLAYLIST_API_URL);
  }

  render() {
    return(
      <main>
        <Header />
        <MainTracks />
      </main>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  getPlaylistFromProps: (URL) => dispatch(fetchAPI(URL)),
})

export default connect(null, mapDispatchToProps)(Main);