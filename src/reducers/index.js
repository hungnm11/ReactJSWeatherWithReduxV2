import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import weatherReducers from './reducer_weather';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: weatherReducers,
  form: formReducer
});

export default rootReducer;
