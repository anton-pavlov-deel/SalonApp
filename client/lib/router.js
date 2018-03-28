import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { render } from 'react-dom';

import Layout from './layout';
import EmployeesPage from '../pages/employees';
import ClientsPage from '../pages/clients';

FlowRouter.wait();

FlowRouter.route('/', {
  action: function(params, queryParams) {
    FlowRouter.go('/employees');
  }
})

FlowRouter.route('/employees', {
  action: function(params, queryParams) {
    render(<Layout content={(<EmployeesPage />)}/>, document.getElementById('root'));
  }
})

FlowRouter.route('/clients', {
  action: function(params, queryParams) {
    render(<Layout content={(<ClientsPage />)}/>, document.getElementById('root'));
  }
})
