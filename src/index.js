import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import { BrowserRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
import '../style/style.scss'

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
