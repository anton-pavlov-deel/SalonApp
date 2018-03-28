import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeesControlPanel from './employees/EmployeesControlPanel';
import AddEmployeePopup from './employees/AddEmployeePopup';
import { toggleShowAddEmployeePopup } from '../lib/actions/employees';

class EmployeesPage extends Component {
  render() {
    return (
      <div className='employees-page'>
        {
          this.props.showAddEmployeePopup &&
          <AddEmployeePopup />
        }
        <EmployeesControlPanel />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showAddEmployeePopup: state.showAddEmployeePopup
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
