export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const REQUEST_API = 'REQUEST_API';

const PLAYLIST_API_URL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart';

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

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(PLAYLIST_API_URL)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => dispatch(getAPI(data)))
  }
};