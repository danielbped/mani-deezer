import { ADD_FAV, REMOVE_FAV } from '../actions'

const INITIAL_STATE = {
  favs: [],
};

const user = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_FAV:
      return {
        ...state,
        favs: [...state.favs, action.payload]
      }
    case REMOVE_FAV:
      return {
        ...state,
        favs: [...state.favs.filter((fav) => fav.id !== action.payload)]
      }
    default:
      return state;
  }
}

export default user;