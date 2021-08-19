import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../components/MainTracks/Banner';
import Header from '../components/Header';

class Favs extends Component {
  render() {
    const { favs } = this.props;
    return(
      <main>
        <Header />
        <Link to='/'>
          <button type='button'>Voltar</button>
        </Link>
        <h2>Músicas Favoritas</h2>
        <div>
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
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  favs: state.user.favs,
})


export default connect(mapStateToProps)(Favs)