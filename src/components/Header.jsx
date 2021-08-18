import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Mani Deezer</h1>
        <input type="text" placeholder="Buscar" />
      </header>
    );
  }
}

export default Header;