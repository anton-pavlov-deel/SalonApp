import React, { Component } from 'react';

import UIPack from '../../imports/ui/UIPack';

const {
  NavigationLink,
  Logo
} = UIPack;

export default class NavigationApp extends Component {
  render() {
    const links = [
      {
        href: 'employees',
        text: 'Сотрудники',
      },
      {
        href: 'clients',
        text: 'Клиенты'
      }
    ]

    return (
      <div className='navigation-app'>
        <Logo />
        {links.map((object, index) => <NavigationLink key={index} href={object.href} text={object.text}/>)}
      </div>
    );
  }
}
