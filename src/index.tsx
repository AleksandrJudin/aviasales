import React from 'react';
import ReactDOM from 'react-dom';

import SearchTicketsContainer from './containers';
import { store } from './store';
import { Provider } from 'react-redux';

import './index.sass';

ReactDOM.render(
  <Provider store={store}>
    <SearchTicketsContainer />
  </Provider>,
  document.getElementById('root')
);
