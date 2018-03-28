import React, { Component } from 'react';

export default class NavigationLink extends Component {
  render() {
    return (
      <a className='navigation-link' href={this.props.href}>
        {this.props.text}
      </a>
    );
  }
}
