import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../components/MainTracks/Banner';

class Favs extends Component {
  render() {
    const { favs } = this.props;
    if(favs === []) {
      return <p>Parace que você ainda não adicionou nenhuma música aos seus favoritos</p>
    }
    return(
      <main>
        <h2>Músicas Favoritas</h2>
        <div>
          {favs.map((fav) => (
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