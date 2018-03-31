import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import {
  ADD_EMPLOYEE,
  REMOVE_EMPLOYEE,
  CHANGE_EMPLOYEE,
  FETCH_EMPLOYEES,
  TOGGLE_SHOW_ADD_EMPLOYEE_POPUP
} from '../actions/employees';

import { Employees } from '../../../imports/api/collections/employees';

const DB = [{ "_id" : 123, "name" : "Павлов Антон Викторович", "role" : "Парикмахер", "percent" : 0.4, "dailyProfit" : 0, "monthlyProfit" : 0 },
{ "_id" : 124, "name" : "Солодовникова Алевтина Романовна", "role" : "Стилист", "percent" : 0.5, "dailyProfit" : 0, "monthlyProfit" : 0 }];

export function employees(state = [], action) {
  switch(action.type) {
    case FETCH_EMPLOYEES:
      return Employees.find().fetch() || state;
    case ADD_EMPLOYEE:
      const _id = String(_.now());

      if (!action.employee) return state;

      Employees.insert({_id, ...action.employee});

      return [
        ...state,
        {
          _id,
          ...action.employee
        }
      ]
    case REMOVE_EMPLOYEE:
      Employees.remove({_id: action.employee._id});
      const diff = _.differenceBy(state, [action.employee], '_id');
      console.log(`DIFF: ${JSON.stringify(diff)}`);
      return diff ? diff : {}
    default:
      return state;
  }
}

export function currentEmployee(state = {}, action) {
  switch(action.type) {
    case CHANGE_EMPLOYEE:
      if (!action.employee) return Employees.find().fetch()[0] ? Employees.find().fetch()[0] : {};
      return action.employee ? action.employee : state;
    case REMOVE_EMPLOYEE:
      return state === action.employee ? {} : state;
    default:
      return state;
  }
}

export function showAddEmployeePopup(state = false, action) {
  switch(action.type) {
    case TOGGLE_SHOW_ADD_EMPLOYEE_POPUP:
      return !state;
    default:
      return state;
  }
}
