import { combineReducers } from "redux";
import statePlaylist from './statePlaylist';

const rootReducer = combineReducers({
  statePlaylist,
});

export default rootReducer;