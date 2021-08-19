import { SUCCESS_REQUEST, REQUEST_API } from '../actions'

const INITIAL_STATE = {
  loading: true,
  playlist: [],
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
    default:
      return state;
  }
}

export default statePlaylist;