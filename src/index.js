import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

const middleWare = [reduxPromise, reduxThunk]

const store = applyMiddleware(...middleWare)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById('root')
);

