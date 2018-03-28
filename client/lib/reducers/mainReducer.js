import { combineReducers } from 'redux';

import {
  employees,
  currentEmployee,
  showAddEmployeePopup
} from './employees';

import {
  clients,
  currentClient,
  showAddClientPopup
} from './clients';

export default combineReducers({
  showAddClientPopup,
  showAddEmployeePopup,
  currentEmployee,
  currentClient,
  employees,
  clients
});
