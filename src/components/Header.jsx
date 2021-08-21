import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAPI } from '../redux/actions';
import {
  StyledHeader,
  RightHeader,
  SearchBar,
  StyledHeart,
  StyledLogo,
  Title,
} from './StyledComponents/StyledHeader';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }
  }

  handleChange = ({target: { name, value } }) => this.setState({ [name]:value });

  handleSubmit = ({ key }) => {
    if (key === 'Enter') {
      console.log('do validate');
      const { getPlaylistFromProps } = this.props;
      const { input } = this.state;
      const URL_API = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${input}`
      getPlaylistFromProps(URL_API);
      this.setState({
        input: '',
      })
    }
  }

  render () {
    const { input } = this.state;
    return (
      <StyledHeader>
        <Title>
          <StyledLogo src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Deezer_Icon.svg" alt="deezer" />
          Maneezer
        </Title>
        <RightHeader>
          <SearchBar
            name='input'
            type='text'
            value={ input }
            onChange={ this.handleChange }
            onKeyDown={ (e) => this.handleSubmit(e) }
            placeholder='Buscar'
          />
          <Link to="/favorites">
            <StyledHeart />
          </Link>
        </RightHeader>
      </StyledHeader>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlaylistFromProps: (URL) => dispatch(fetchAPI(URL)),
})

export default connect(null, mapDispatchToProps)(Header);
