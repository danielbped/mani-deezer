export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const REQUEST_API = 'REQUEST_API';
export const TOGGLE_FAV = 'TOGGLE_FAV';


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

export function toggleFav(song) {
  return {
    type: TOGGLE_FAV,
    payload: song,
  }
}

export function fetchAPI(URL) {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch(URL, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "7d620fc178msh9b8dd7415474761p15962djsn95f6930f45c5"
      }
    })
      .then((response) => response.json())
      .then((json) => json)
      .then((data) => dispatch(getAPI(data)))
  }
};