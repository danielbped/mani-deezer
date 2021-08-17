import { GET_TOKEN } from '../actions';

const INITIAL_STATE = {
  token: '',
}

const userInfo = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_TOKEN:
    return {
      ...state,
      token: action.payload,
    }
  default: 
    return state;
  }
}

export default userInfo;