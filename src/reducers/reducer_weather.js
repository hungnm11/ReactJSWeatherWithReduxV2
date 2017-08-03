import { FETCH_REQUEST, FETCH_WEATHER, FETCH_ERROR } from '../actions/index';

const initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_REQUEST: 
      return state;
    case FETCH_WEATHER:
      return { 
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data
      };
  }
  return state;
}