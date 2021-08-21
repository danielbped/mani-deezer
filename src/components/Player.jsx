import React, { Component } from 'react';
import { StyledPlayer, StyledPause, StyledPlay } from './StyledComponents/StyledPlayer';
import { connect } from 'react-redux';
import { togglePlay } from '../redux/actions';


class Player extends Component {
  constructor({ preview }) {
    super();
    this.state = {
      audio: new Audio(preview),
    }
  }
  
  componentDidMount() {
    const { audio } = this.state;
    const { togglePlaying } = this.props;
    audio.addEventListener('ended', () => togglePlaying(''));
  }
  
  componentWillUnmount() {
    const { audio } = this.state;
    const { togglePlaying } = this.props;
    audio.removeEventListener('ended', () => togglePlaying(''));  
  }
  
  togglePlay = () => {
    const { audio } = this.state;
    const { togglePlaying, Player, preview, statePreview } = this.props;
    if((Player) && preview === statePreview) {
      togglePlaying(preview);
      return audio.pause();
    } else if (!Player) {
      togglePlaying(preview);
      return audio.play();
    }
  }

  render() {
    const { Player, preview, statePreview  } = this.props;

    return (
      <StyledPlayer
        type="button"
        onClick={ this.togglePlay }
      >
        {(Player) && preview === statePreview ?  <StyledPause /> : <StyledPlay />}
      </StyledPlayer>
    )
  }
}

const mapStateToProps = (state) => ({
  statePreview: state.statePlaylist.statePreview,
  Player: state.statePlaylist.isPlaying,
})

const mapDispatchToProps = (dispatch) => ({
  togglePlaying: (preview) => dispatch(togglePlay(preview))
})

export default connect(mapStateToProps, mapDispatchToProps)(Player);