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
    const formFields = [
      {
        name: 'name',
        type: 'text'
      },

      {
        name: 'role',
        type: 'text',
      },

      {
        name: 'percent',
        type: 'text',
        pattern: '0\.[0-9]'
      },

      {
        name: 'birth',
        type: 'date',
      },

      {
        name: 'number',
        type: 'text',
        pattern: '\\+38[0-9]{10}',
        placeholder: 'Введите номер в формате: +389999999999'
      }
    ]

    const form = <Form
      className='add-employee-form'
      onSubmit={this.handleSubmit.bind(this)}
      fields={formFields}
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
