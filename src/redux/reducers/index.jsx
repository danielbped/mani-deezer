import { combineReducers } from "redux";
import statePlaylist from './statePlaylist';
import user from './user';

const rootReducer = combineReducers({
  statePlaylist,
  user,
});

export default rootReducer;