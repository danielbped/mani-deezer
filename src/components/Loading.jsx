import React, { Component } from 'react';
import { StyledLoading, LoadingMain } from './StyledComponents/StyledLoading';

class Loading extends Component {
  render () {
    return (
      <LoadingMain>
        <StyledLoading />
      </LoadingMain>
    )
  }
}

export default Loading;
