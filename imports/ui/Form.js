import React, { Component } from 'react';
import classNames from 'classnames';
import Button from './Button';
import _ from 'lodash';
import DICT from '../constants/employeeDict.js';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = _.zipObject(props.fields, _.fill(Array(props.fields.length), ''));
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state);
    this.props.onSubmit(this.state);
  }

  render() {
    const {
      onSubmit,
      fields
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={classNames('form', this.props.className)}>
        <table>
          <thead></thead>
          <tbody>
            {fields.map((field, index) => (<tr key={index}><th>{`${DICT[field]}: `}</th><td>
                                                                                          <input
                                                                                            type='text'
                                                                                            name={field}
                                                                                            required
                                                                                            value={this.state[field]}
                                                                                            onChange={this.handleChange.bind(this)}
                                                                                          /></td></tr>))}
          </tbody>
        </table>
        <Button
          className='submit-button'
          submit
          value='Подтвердить'
        />
      </form>
    );
  }
}
