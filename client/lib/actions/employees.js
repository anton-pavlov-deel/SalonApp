export const INIT_EMPLOYEES = 'INIT_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';
export const CHANGE_EMPLOYEE = 'CHANGE_EMPLOYEE';
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const TOGGLE_SHOW_ADD_EMPLOYEE_POPUP = 'TOGGLE_SHOW_ADD_EMPLOYEE_POPUP';

export function initEmployees() {
  return dispatch => {
    dispatch(fetchEmployees());
    dispatch(changeEmployee());
  }
}

export function fetchEmployees() {
  return {
    type: FETCH_EMPLOYEES
  }
}

export function addEmployee(employee) {
  return {
    type: ADD_EMPLOYEE,
    employee
  }
}

export function removeEmployee(employee) {
  return {
    type: REMOVE_EMPLOYEE,
    employee
  }
}

export function changeEmployee(employee) {
  return {
    type: CHANGE_EMPLOYEE,
    employee
  }
}

export function toggleShowAddEmployeePopup() {
  return {
    type: TOGGLE_SHOW_ADD_EMPLOYEE_POPUP
  }
}
