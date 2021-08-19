import { TOGGLE_FAV } from '../actions'

const INITIAL_STATE = {
  favs: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_FAV:
      return {
        ...state,
        favs: state.favs.some(
          (fav) => fav.id === action.payload.id) ? [...state.favs.filter(
            (fav) => fav.id !== action.payload.id)] : [...state.favs, action.payload],
      }
    default:
      return state;
  }
}

export default user;