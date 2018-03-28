import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientsControlPanel from './clients/ClientsControlPanel';
import AddClientPopup from './clients/AddClientPopup';
import { toggleShowAddClientPopup } from '../lib/actions/clients';

class ClientsPage extends Component {
  render() {
    return (
      <div className='clients-page'>
        {
          this.props.showAddClientPopup &&
          <AddClientPopup />
        }
        <ClientsControlPanel />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showAddClientPopup: state.showAddClientPopup
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleShowAddClientPopup: () => {
      dispatch(toggleShowAddClientPopup());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsPage);
