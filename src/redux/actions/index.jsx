export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const REQUEST_API = 'REQUEST_API';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';


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

export function togglePlay() {
  return {
    type: TOGGLE_PLAY,
  }
}

export function addFav(song) {
  return {
    type: ADD_FAV,
    payload: song,
  }
}

export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  }
}

export function fetchAPI(URL) {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(URL)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => dispatch(getAPI(data)))
  }
};