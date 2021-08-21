import React, { Component } from 'react';
import { StyledPlayer, StyledPause, StyledPlay } from './StyledComponents/StyledPlayer';

class Player extends Component {
  constructor({ preview }) {
    super();

    this.state = {
      isPlaying: false,
      audio: new Audio(preview),
    }
  }

  componentDidMount() {
    const { audio } = this.state;
    audio.addEventListener('ended', () => this.setState({ isPlaying: false }));
  }
  
  componentWillUnmount() {
    const { audio } = this.state;
    audio.removeEventListener('ended', () => this.setState({ isPlaying: false }));  
  }
  
  togglePlay = () => {
    const { isPlaying, audio } = this.state;
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
    }), () => isPlaying ? audio.pause() : audio.play())
  }

  render() {
    const { isPlaying } = this.state;
    return (
      <StyledPlayer
        type="button"
        onClick={ this.togglePlay }
      >
        {isPlaying ?  <StyledPause /> : <StyledPlay />}
      </StyledPlayer>
    )
  }
}

export default Player;