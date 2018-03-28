import React, { Component } from 'react';

export default class PlusButton extends Component {
  render() {
    const {
      handleClick
    } = this.props;

    return (
      <a
        href=''
        className='plus-button'
        onClick={handleClick}
      />
    );
  }
}
