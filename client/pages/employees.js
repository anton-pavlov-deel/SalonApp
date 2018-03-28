import _ from 'lodash';
import React, { Component } from 'react';
import UIPack from '../../imports/ui/UIPack';
import { connect } from 'react-redux';
import EmployeesControlPanel from './employees/EmployeesControlPanel';
import AddEmployeePopup from './employees/AddEmployeePopup';
import { toggleShowAddEmployeePopup } from '../lib/actions/employees';

const {
  Popup,
  Form
} = UIPack;

class EmployeesPage extends Component {
  render() {
    const {
      currentEmployee,
      employees
    } = this.props;

    return (
      <div>
        {this.props.showAddEmployeePopup &&
          <AddEmployeePopup />
        }
        <EmployeesControlPanel />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showAddEmployeePopup: state.showAddEmployeePopup,
    employees: state.employees,
    currentEmployee: state.currentEmployee,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleShowAddEmployeePopup: () => {
      dispatch(toggleShowAddEmployeePopup());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesPage);
