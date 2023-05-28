import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Favs from './pages/Favs';

class Routes extends Component {
  render() {
    return(
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Route exact path="/" component={ App } />
        <Route path="/favorites" component={ Favs } />
      </BrowserRouter>
    )
  }
}

export default Routes;