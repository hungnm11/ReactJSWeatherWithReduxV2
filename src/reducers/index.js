import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weatherReducer from './reducer_weather';
import locationReducer from './reducer_location';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: weatherReducer,
  location: locationReducer,
  form: formReducer
});

export default rootReducer;
