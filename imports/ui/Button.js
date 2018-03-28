import React, { Component } from 'react';
import classNames from 'classnames';

export default class Button extends Component {
  render() {
    const {
      onClick,
      value,
      submit
    } = this.props;

    return (
      submit &&
      <input
        type='submit'
        value={value}
        className={classNames('button', this.props.className)}
      />
      ||
      <a
        className={classNames('button', this.props.className)}
        href=''
        onClick={onClick}
      >
        {value}
      </a>
    );
  }
}
