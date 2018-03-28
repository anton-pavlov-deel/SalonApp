import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees');

export const subscribeEmployees = (cb) => {
  let attempt = 1

  console.group('EMPLOYEES_DB_CONNECTION');

  const dbConnection = setInterval(() => {
    if (!Employees.find().fetch().length) {
      Meteor.subscribe('employees');
      console.log(`Connection DB. Attempt: ${attempt}`);
      attempt += 1;
    } else {
      console.log(`DB was successfully connected.\n`);
      console.info('DB state', Employees.find().fetch());
      console.groupEnd('EMPLOYEES_DB_CONNECTION');
      clearInterval(dbConnection);
      cb();
    }
  }, 500);
}


if (Meteor.isServer) {
    console.log(Employees.find().fetch());
    Meteor.publish('employees', () => {
      return Employees.find();
    });
}
