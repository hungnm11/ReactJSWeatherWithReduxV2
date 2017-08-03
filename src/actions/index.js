
import axios from 'axios';

export const GET_LOCATION = 'GET_LOCATION';

const API_KEY = 'e1f4fca3b8af6f3daccf60d38fbb93f6';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const ROOT_URL = `https://api.darksky.net/forecast/${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function getLocation(location) {
  return {
    type: GET_LOCATION,
    payload: location
  }
}

export function getLatLng(position) {
  const lat = position.lat;
  const lng = position.lng;
  
  const url = `${PROXY_URL + ROOT_URL}/${lat},${lng}`;
  console.log('URL', url);
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}