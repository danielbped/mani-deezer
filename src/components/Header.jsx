import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display:flex;
  background-color: gray;
  padding: 1rem;
  justify-content: space-around;
`

class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <h1>Mani Deezer</h1>
        <input type="text" placeholder="Buscar" />
      </HeaderStyled>
    );
  }
}

export default Header;