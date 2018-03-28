import React, { Component } from 'react';

export default class CloseButton extends Component {
  render() {
    const {
      handleClick
    } = this.props;

    return (
      <a
        href=''
        className='close-button'
        onClick={handleClick}
      />
    );
  }
}
