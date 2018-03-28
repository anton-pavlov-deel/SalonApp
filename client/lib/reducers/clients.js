import _ from 'lodash';
import {
  FETCH_CLIENTS,
  ADD_CLIENT,
  REMOVE_CLIENT,
  CHANGE_CLIENT,
  TOGGLE_SHOW_ADD_CLIENT_POPUP
} from '../actions/clients';

import { Clients } from '../../../imports/api/collections/clients';

export function clients(state = [], action) {
  switch(action.type) {
    case FETCH_CLIENTS:
      return Clients.find().fetch() || state;
    case ADD_CLIENT:
      _id = String(_.now());

      if (!action.client) return state;

      Clients.insert({_id, ...action.client});

      return [
        ...state,
        {
          _id,
          ...action.client
        }
      ]
    case REMOVE_CLIENT:
      Clients.remove({_id: action.client._id});
      return _.difference(state, [action.client]);
    default:
      return state;
  }
}

export function currentClient(state = {}, action) {
  switch(action.type) {
    case CHANGE_CLIENT:
      if (!action.client) return Clients.find().fetch()[0] ? Clients.find().fetch()[0] : {};
      return action.client ? action.client : state;
    case REMOVE_CLIENT:
      return state === action.client ? {} : state;
    default:
      return state;
  }
}

export function showAddClientPopup(state = false, action) {
  switch(action.type) {
    case TOGGLE_SHOW_ADD_CLIENT_POPUP:
      return !state;
    default:
      return state;
  }
}
