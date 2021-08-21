import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../components/MainTracks/Banner';
import Header from '../components/Header';
import {
  BackButton,
  ArrowButton,
  Title,
  StyledFavs,
} from './StyledComponents/StyledFavs';

class Favs extends Component {
  render() {
    const { favs } = this.props;
    return(
      <main>
        <Header />
        <Link to='/'>
          <BackButton
            type='button'
          >
            <ArrowButton />
          </BackButton>
        </Link>
        <Title>Músicas Favoritas</Title>
        <StyledFavs>
          {favs.length < 1 ? <p>Parece que você ainda não adicionou nenhuma música.</p>
            : favs.map((fav) => (
            <Banner 
            name={ fav.name }
            artist={ fav.artist }
            id={ fav.id }
            cover={ fav.cover }
            link={ fav.link }
            preview={ fav.preview }
            duration={ fav.duration }
            onClick={ true }
          />
          ))}
        </StyledFavs>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  favs: state.user.favs,
})


export default connect(mapStateToProps)(Favs)