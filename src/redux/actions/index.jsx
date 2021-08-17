export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const REQUEST_API = 'REQUEST_API';
export const GET_TOKEN = 'GET_TOKEN';

const TOKEN_API_URL = 'https://connect.deezer.com/oauth/auth.php?app_id=497582&redirect_uri=http://localhost:3000/&perms=basic_access';
const PLAYLIST_API_URL = 'https://cors-anywhere.herokuapp.com/http://api.deezer.com/search/track/autocomplete?limit=1&q=eminem';

export function requestAPI() {
  return {
    type: REQUEST_API,
  }
};

export function getAPI(data) {
  return {
    type: SUCCESS_REQUEST,
    payload: data,
  }
};

export function getToken(token) {
  return {
    type: GET_TOKEN,
    payload: token,
  }
}

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(PLAYLIST_API_URL)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => dispatch(getAPI(data)))
  }
};

export function fetchTokenAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(TOKEN_API_URL)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => dispatch(getToken(data)))
  }
};