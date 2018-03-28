import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Clients = new Mongo.Collection('clients');

export const subscribeClients = (cb) => {
  let attempt = 1

  console.group('CLIENTS_DB_CONNECTION');

  const dbConnection = setInterval(() => {
    if (!Clients.find().fetch().length) {
      Meteor.subscribe('clients');
      console.log(`Connection DB. Attempt: ${attempt}`);
      attempt += 1;
    } else {
      console.log(`DB was successfully connected.\n`);
      console.info('DB state', Clients.find().fetch());
      console.groupEnd('CLIENTS_DB_CONNECTION');
      clearInterval(dbConnection);
      cb();
    }
  }, 500);
}


if (Meteor.isServer) {
    console.log(Clients.find().fetch());
    Meteor.publish('clients', () => {
      return Clients.find();
    });
}
