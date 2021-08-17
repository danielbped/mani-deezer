import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI, fetchTokenAPI } from '../redux/actions';

class Main extends Component {
  componentDidMount() {
    const { getTokenFromProps } = this.props;
    getTokenFromProps();
  }
  render() {
    const { getPlaylistFromProps } = this.props;
    return(
      <button type="button" onClick={ () => getPlaylistFromProps() }>Request</button>
      
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  getPlaylistFromProps: () => dispatch(fetchAPI()),
  getTokenFromProps: () => dispatch(fetchTokenAPI()),
})

export default connect(null, mapDispatchToProps)(Main);