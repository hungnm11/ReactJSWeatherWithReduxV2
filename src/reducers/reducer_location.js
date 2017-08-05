import { GET_LOCATION, TIME_STAMP } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case GET_LOCATION: 
      return {
        located: action.payload
      };
    case TIME_STAMP: 
      return {
        timestamp: action.payload
      }
  }
  return state;
}