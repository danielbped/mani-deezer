import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';

class Routes extends Component {
  render() {
    return(
      <BrowserRouter>
        <Route exact path="/" component={ App } />
      </BrowserRouter>
    )
  }
}

export default Routes;