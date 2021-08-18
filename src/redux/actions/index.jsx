export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const REQUEST_API = 'REQUEST_API';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';

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

export function fetchAPI(URL) {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(URL)
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => dispatch(getAPI(data)))
  }
};