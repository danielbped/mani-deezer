import { combineReducers } from "redux";
import playlist from './playlist';
import user from './user';

const rootReducer = combineReducers({
  playlist,
  user,
});

export default rootReducer;