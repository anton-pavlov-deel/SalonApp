import React, { Component } from 'react';
import UIPack from '../../../imports/ui/UIPack';
import { connect } from 'react-redux';
import {
  changeClient,
  toggleShowAddClientPopup,
  removeClient
} from '../../lib/actions/clients';

const {
  InfoPanel,
  Button,
  DropMenu,
  Panel
} = UIPack;

class ClientsControlPanel extends Component {
  render() {
    const clientsDropMenu = <DropMenu items={this.props.clients} currentItem={this.props.currentClient} onChange={this.props.onChange}/>
    const currentClientInfo = <InfoPanel content={this.props.currentClient} />
    const addClientButton = <Button value='Добавить' onClick={this.props.toggleShowAddClientPopup}/>
    const removeClientButton = <Button value='Удалить' onClick={this.props.removeClient.bind(null, this.props.currentClient)}/>

    const buttonsPanel = <span>{addClientButton}{removeClientButton}</span>

    return (
      <Panel className='clients-control-panel'
        content={[clientsDropMenu, currentClientInfo, buttonsPanel]}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentClient: state.currentClient,
    clients: state.clients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: client => {
      dispatch(changeClient(client));
    },

    toggleShowAddClientPopup: () => {
      dispatch(toggleShowAddClientPopup());
    },

    removeClient: client => {
      dispatch(removeClient(client));
      dispatch(changeClient());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsControlPanel);
