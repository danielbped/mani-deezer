import { 
  SUCCESS_REQUEST, 
  REQUEST_API,
  TOGGLE_PLAY,
} from '../actions'

const INITIAL_STATE = {
  loading: true,
  playlist: [],
  statePreview: '',
  isPlaying: false,
};

const statePlaylist = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_API:
      return {
        ...state,
        loading: true,
      }
    case SUCCESS_REQUEST: 
      return {
        ...state,
        loading: false,
        playlist: action.payload.tracks || action.payload,
      }
    case TOGGLE_PLAY:
      return {
        ...state,
        isPlaying: !state.isPlaying,
        statePreview: action.payload,
      }
    default:
      return state;
  }
}

export default statePlaylist;