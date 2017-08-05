import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../actions/index';
// import { FETCH_REQUEST, FETCH_WEATHER, FETCH_ERROR, TIME_STAMP } from '../actions/index';


const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

// export default function(state = initialState, action) {
//   switch(action.type) {
//     case FETCH_REQUEST: 
//       return state;
//     case FETCH_WEATHER:
//       return { 
//         ...state,
//         fetching: false,
//         fetched: true,
//         data: action.payload.data
//       };
//     case TIME_STAMP: 
//       return {
//         timestamp: action.payload
//       }
//   }
//   return state;
// }

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [action.payload.data]
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state;
  }
}