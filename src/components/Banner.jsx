import React, { Component } from 'react';
import styled from 'styled-components';

const Album = styled.div`
  margin: 1rem;
`

class Banner extends Component {
  render () {
    const { name, artist, id, image, link, preview } = this.props;
    return (
      <Album>
        <a
          href={ link }
          target="_blank"
          rel="noreferrer"
          >
            <img src={ image } alt={ name } />
        </a>
        <h3>{ name }</h3>
        <p>{`Por ${artist}`}</p>
      </Album>
    )
  }
}

export default Banner;