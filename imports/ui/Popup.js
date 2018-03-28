import React, { Component } from 'react';
import CloseButton from './CloseButton';
import Panel from './Panel';
import classNames from 'classnames';

export default class Popup extends Component {
  render() {
    const {
      title,
      content,
      handleClose,
      className
    } = this.props;

    return (
      <div className='popup'>
        <div className='popup-inner'>
          <div className='popup-header'>
            <h2>{title}</h2>
            <CloseButton handleClick={handleClose}/>
          </div>
          <Panel
            className={classNames('popup-content', className)}
            content={content}
          />
        </div>
      </div>
    );
  }
}
