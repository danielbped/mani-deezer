import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchAPI } from '../redux/actions';

const HeaderStyled = styled.header`
  display:flex;
  background-color: gray;
  padding: 1rem;
  justify-content: space-around;
`

class Header extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  handleChange = ({ target: { name, value } }) => this.setState({ [name]:value })
  handleClick = () => {
    const { getPlaylistFromProps } = this.props;
    const { input } = this.state;
    const URL_API = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${input}`
    getPlaylistFromProps(URL_API);
  }


  render () {
    const { input } = this.state;
    return (
      <HeaderStyled>
        <h1>Mani Deezer</h1>
        <div>
          <input name='input' type='text' onChange={ this.handleChange } placeholder='Buscar' />
          <button type='button' onClick={ this.handleClick }>Buscar</button>
        </div>
      </HeaderStyled>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlaylistFromProps: (URL) => dispatch(fetchAPI(URL)),
})

export default connect(null, mapDispatchToProps)(Header);
