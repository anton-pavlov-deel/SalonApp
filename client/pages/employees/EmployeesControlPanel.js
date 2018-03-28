import React, { Component } from 'react';
import UIPack from '../../../imports/ui/UIPack';
import { connect } from 'react-redux';
import {
  changeEmployee,
  toggleShowAddEmployeePopup,
  removeEmployee
} from '../../lib/actions/employees';

const {
  InfoPanel,
  Button,
  DropMenu,
  Panel
} = UIPack;

class EmployeesControlPanel extends Component {
  render() {
    const employeesDropMenu = <DropMenu items={this.props.employees} currentItem={this.props.currentEmployee} onChange={this.props.onChange}/>
    const currentEmployeeInfo = <InfoPanel content={this.props.currentEmployee} />
    const addEmployeeButton = <Button value='Добавить' onClick={this.props.toggleShowAddEmployeePopup}/>
    const removeEmployeeButton = <Button value='Удалить' onClick={this.props.removeEmployee.bind(null, this.props.currentEmployee)}/>

    const buttonsPanel = <span>{addEmployeeButton}{removeEmployeeButton}</span>

    return (
      <Panel className='employees-control-panel'
        content={[employeesDropMenu, currentEmployeeInfo, buttonsPanel]}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentEmployee: state.currentEmployee,
    employees: state.employees
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: employee => {
      dispatch(changeEmployee(employee));
    },

    toggleShowAddEmployeePopup: () => {
      dispatch(toggleShowAddEmployeePopup());
    },

    removeEmployee: employee => {
      dispatch(removeEmployee(employee));
      dispatch(changeEmployee());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesControlPanel);
