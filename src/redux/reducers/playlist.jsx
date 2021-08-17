import { SUCCESS_REQUEST, REQUEST_API } from '../actions'

const INITIAL_STATE = {
  playlist: [],
  loading: false,
};

const playlist = (state = INITIAL_STATE, action) => {
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
        playlist: action.payload,
      }
    default:
      return state;
  }
}

export default playlist;