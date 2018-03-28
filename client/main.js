import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Store from './lib/store';
import './lib/router';

Meteor.startup(() => {

  FlowRouter.initialize();
  FlowRouter.go('/employees');
});
