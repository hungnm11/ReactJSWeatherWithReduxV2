
// import axios from 'axios';

export const GET_LOCATION = 'GET_LOCATION';

export function getLocation(location) {
  console.log('Location', location);
  return {
    type: GET_LOCATION,
    payload: location
  }
}