import { createStore, applyMiddleware } from 'redux';
import MainReducer from './reducers/mainReducer';
import { initEmployees } from './actions/employees';
import { initClients } from './actions/clients';

import { loggerMiddleware } from './middleware';
import thunkMiddleware from 'redux-thunk';

import { subscribeEmployees } from '../../imports/api/collections/employees';
import { subscribeClients } from '../../imports/api/collections/clients';

const Store = createStore(
  MainReducer,
  applyMiddleware(
    loggerMiddleware,
    thunkMiddleware
  )
);

subscribeEmployees(Store.dispatch.bind(null, initEmployees()));

export default Store;
