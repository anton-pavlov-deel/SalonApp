import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './store';

import NavigationApp from '../pages/NavigationApp';

export default class Layout extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div id='root-div'>
          <NavigationApp />
          {this.props.content}
        </div>
      </Provider>
    );
  }
}
