import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchAPI } from '../redux/actions';

const HeaderStyled = styled.header`
  background-color: black;
  color: white;
  display:flex;
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
    const URL_API = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${input}`
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
          <div>
            <Link to="/favorites">
              <button type="button">Músicas Favoritas</button>
            </Link>
          </div>
        </div>
      </HeaderStyled>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlaylistFromProps: (URL) => dispatch(fetchAPI(URL)),
})

export default connect(null, mapDispatchToProps)(Header);
