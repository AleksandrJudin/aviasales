import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import tickets from '../slices/tickets';
import filters from '../slices/filters';

const reducer = {
  tickets,
  filters,
};

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({ reducer, middleware });
