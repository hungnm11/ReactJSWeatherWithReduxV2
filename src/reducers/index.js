import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import getLocationReducer from './reducer_weather';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  location: getLocationReducer,
  form: formReducer
});

export default rootReducer;
