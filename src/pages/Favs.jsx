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
    const favs = JSON.parse(localStorage.getItem('favs'));
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
          {favs.length === 0 ? <p>Parece que você ainda não adicionou nenhuma música.</p>
            : favs.map((fav) => (
            <Banner
            key={ fav.id }
            name={ fav.name }
            artist={ fav.artist }
            id={ fav.id }
            cover={ fav.cover }
            link={ fav.link }
            preview={ fav.preview }
            duration={ fav.duration }
            albumId={ fav.albumId }
            artistLink={ fav.artistLink }
            MusicLink={ fav.MusicLink }
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