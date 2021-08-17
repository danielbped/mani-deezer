import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI, fetchTokenAPI } from '../redux/actions';

class Main extends Component {
  componentDidMount() {
    const { getPlaylistFromProps } = this.props;
    getPlaylistFromProps();
  }
  render() {
    return(
      <h1>Mani Deezer</h1>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  getPlaylistFromProps: () => dispatch(fetchAPI()),
  getTokenFromProps: () => dispatch(fetchTokenAPI()),
})

export default connect(null, mapDispatchToProps)(Main);