
import axios from 'axios';

export const GET_LOCATION = 'GET_LOCATION';

const API_KEY = 'e1f4fca3b8af6f3daccf60d38fbb93f6';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL = `https://api.darksky.net/forecast/${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_ERROR = 'FETCH_ERROR';
export const TIME_STAMP = 'TIME_STAMP';

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

// export function renderTimestamp(time) {
//   const d = new Date(time);
//   let timestamp = '';
//   let day = d.getDate();
//   let month = d.getMonth() + 1;
//   const hours = d.getHours() >= 10 ? d.getHours() : `0${d.getHours()}`;
//   const min = d.getMinutes() >= 10 ? d.getMinutes() : `0${d.getMinutes()}`;
//   day = day >= 10 ? day : `0${day}`;
//   month = month >= 10 ? month : `0${month}`;
//   const year = d.getFullYear() >= 10 ? d.getFullYear() : `0${d.getFullYear()}`;
//   const _day = `${day}.${month}.${year}`;
//   const _time = `${hours}:${min}`;
//   let _period = '';
//   if (isNoTitle) {
//     timestamp = `${_day}, ${_time}`;
//   } else if (period !== null && period !== 'today') {
//     _period = (period === 'lastmonth') ? 30 : 7;
//     timestamp = getLang('timestamp', language);
//     timestamp = timestamp.replace('{date}', _day)
//         .replace('{time}', _time)
//         .replace('{period}', _period);
//   } else if (period !== null && period === 'today') {
//     timestamp = getLang('timestampToday', language);
//     timestamp = timestamp.replace('{date}', _day)
//         .replace('{time}', _time);
//   } else {
//     timestamp = getLang('timestampNoPeriod', language);
//     timestamp = timestamp.replace('{date}', _day)
//         .replace('{time}', _time);
//   }
//   console.log('TIME', timestamp);
//   return {
//     type: TIME_STAMP,
//     payload: timestamp
//   }
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
  console.log('FETCHDATA', located)
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