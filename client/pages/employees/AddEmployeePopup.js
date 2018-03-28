import React, { Component } from 'react';
import UIPack from '../../../imports/ui/UIPack';
import { addEmployee, toggleShowAddEmployeePopup } from '../../lib/actions/employees';
import { connect } from 'react-redux';

const {
  Popup,
  Form
} = UIPack;

class AddEmployeePopup extends Component {
  handleSubmit(employee) {
    this.props.addEmployee(employee)
    this.props.toggleShowAddEmployeePopup();
  }

  render() {
    const form = <Form
      className='add-employee-form'
      onSubmit={this.handleSubmit.bind(this)}
      fields={['name', 'role', 'percent', 'birth', 'number']}
    />

    return (
      (<Popup
        title={'Новый сотрудник'}
        content={form}
        handleClose={this.props.toggleShowAddEmployeePopup}
      />)
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleShowAddEmployeePopup: () => {
      dispatch(toggleShowAddEmployeePopup());
    },

    addEmployee: employee => {
      dispatch(addEmployee(employee));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddEmployeePopup);
