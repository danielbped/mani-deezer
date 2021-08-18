import React, { Component } from 'react';

class Banner extends Component {
  render () {
    const { name, artist, id, image, link, preview, title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <a
          href={ link }
          target="_blank"
          rel="noreferrer"
          >
            <img src={ image } alt={ name } />
        </a>
        <h3>{ name }</h3>
        <p>{`Por ${artist}`}</p>
      </div>
    )
  }
}

export default Banner;