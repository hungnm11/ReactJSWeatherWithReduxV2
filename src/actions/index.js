
import axios from 'axios';

export const GET_LOCATION = 'GET_LOCATION';

const API_KEY = 'e1f4fca3b8af6f3daccf60d38fbb93f6';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL = `https://api.darksky.net/forecast/${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_ERROR = 'FETCH_ERROR';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

// export function getLocation(location) {
//   return {
//     type: GET_LOCATION,
//     payload: location
//   }
// }

// export function fetchRequest() {
//   return {
//     type: FETCH_REQUEST
//   }
// }

// export function getLatLng(position) {
//   const lat = position.lat;
//   const lng = position.lng;
  
//   const url = `${PROXY_URL + ROOT_URL}/${lat},${lng}`;
//   console.log('URL', url);
//   const request = axios.get(url);
//   return { type: FETCH_WEATHER, payload: request }
// }


export function getLocation(location) {
  return {
    type: GET_LOCATION,
    payload: location
  }
}

export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    payload: data
  }
}

export function getDataFailure(error) {
  return {
    type: FETCHING_DATA_FAILURE,
    payload: error
  }
}

export function fetchData(located) {
  const lat = located.lat;
  const lng = located.lng;
  
  const url = `${PROXY_URL + ROOT_URL}/${lat},${lng}`;
  console.log('URL', url)
  return (dispatch) => {
    dispatch(getData())
    axios.get(url)
    .then((response) => {
      dispatch(getDataSuccess(response))
    })
    .catch((err) => {
      dispatch(getDataFailure(err))
    })
  }
}