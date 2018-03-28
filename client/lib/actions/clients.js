export const INIT_CLIENTS = 'INIT_CLIENTS';
export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const ADD_CLIENT = 'ADD_CLIENT';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';
export const CHANGE_CLIENT = 'CHANGE_CLIENT';
export const TOGGLE_SHOW_ADD_CLIENT_POPUP = 'TOGGLE_SHOW_ADD_CLIENT_POPUP';

export function initClients() {
  return dispatch => {
    dispatch(fetchClients());
    dispatch(changeClient());
  }
}

export function fetchClients() {
  return {
    type: FETCH_CLIENTS
  }
}

export function addClient(client) {
  return {
    type: ADD_CLIENT,
    client
  }
}

export function removeClient(client) {
  return {
    type: REMOVE_CLIENT,
    client
  }
}

export function changeClient(client) {
  return {
    type: CHANGE_CLIENT,
    client
  }
}

export function toggleShowAddClientPopup() {
  return {
    type: TOGGLE_SHOW_ADD_CLIENT_POPUP
  }
}
