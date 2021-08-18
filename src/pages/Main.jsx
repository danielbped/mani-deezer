import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../redux/actions';
import Header from '../components/Header';
import MainTracks from '../components/MainTracks';

class Main extends Component {
  componentDidMount() {
    const { getPlaylistFromProps } = this.props;
    getPlaylistFromProps();
  }

  render() {
    const { loading } = this.props;
    return(
      <main>
        <Header />
        {!loading && <MainTracks />}
      </main>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  getPlaylistFromProps: () => dispatch(fetchAPI()),
})

const mapStateToProps = (state) => ({
  loading: state.statePlaylist.loading,
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);