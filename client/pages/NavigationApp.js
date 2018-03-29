import React, { Component } from 'react';

import UIPack from '../../imports/ui/UIPack';

const {
  NavigationLink,
  Logo
} = UIPack;

export default class NavigationApp extends Component {
  constructor(props) {
    super(props);

    this.links = [
      {
        href: 'employees',
        text: 'Сотрудники',
      },
      {
        href: 'clients',
        text: 'Клиенты'
      }
    ];

    this.state = {
      page: this.links[0]
    };
  }

  handlePageChange(page) {
    this.setState({
      page
    });
  }

  render() {
    return (
      <div className='navigation-app'>
        <div className='logo-and-links'>
          <Logo />
          {this.links.map((object, index) => <NavigationLink key={index} href={object.href} text={object.text} onClick={this.handlePageChange.bind(this, object)}/>)}
        </div>
        <h1 className='page-title'>{this.state.page.text}</h1>
      </div>
    );
  }
}
