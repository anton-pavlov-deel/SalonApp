import React, { Component } from 'react';
import classNames from 'classnames';

export default class Panel extends Component {
  render() {
    const content = this.props.content;
    const mainContent = content.length ? [...content] : [content];

    return (
      <div className={classNames('panel', this.props.className)}>
        {mainContent.map((object, index) => <div key={index}>{object}</div>)}
      </div>
    )
  }
}
