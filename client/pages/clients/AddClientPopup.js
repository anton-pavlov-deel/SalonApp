import React, { Component } from 'react';
import UIPack from '../../../imports/ui/UIPack';
import { addClient, toggleShowAddClientPopup } from '../../lib/actions/clients';
import { connect } from 'react-redux';

const {
  Popup,
  Form
} = UIPack;

class AddClientPopup extends Component {
  handleSubmit(client) {
    this.props.addClient(client)
    this.props.toggleShowAddClientPopup();
  }

  render() {
    const form = <Form
      className='add-client-form'
      onSubmit={this.handleSubmit.bind(this)}
      fields={['name', 'birth', 'number']}
    />

    return (
      (<Popup
        title={'Новый клиент'}
        content={form}
        handleClose={this.props.toggleShowAddClientPopup}
      />)
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleShowAddClientPopup: () => {
      dispatch(toggleShowAddClientPopup());
    },

    addClient: client => {
      dispatch(addClient(client));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddClientPopup);
