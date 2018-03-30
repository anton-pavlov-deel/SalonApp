import React, { Component } from 'react';
import classNames from 'classnames';
import Button from './Button';
import DatePicker from 'react-datepicker';
import _ from 'lodash'
import moment from 'moment';
import DICT from '../constants/dict.js';

import 'react-datepicker/dist/react-datepicker.css';

export default class Form extends Component {
  constructor(props) {
    super(props);

    const fieldNames = props.fields.map(field => field.name);
    const initialValues = props.fields.map(field => field.type === 'text' ? '' : moment().format());

    this.state = _.zipObject(fieldNames, initialValues);
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChangeDate(name, date) {
    this.setState({
      [name]: date.format()
    });
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

    const inputs = fields.map(field => {
      switch(field.type) {
        case 'text':
          return {
            ...field,

            component: <input
              className='text-input'
              type='text'
              name={field.name}
              pattern={field.pattern}
              required
              value={this.state[field.name]}
              onChange={this.handleChange.bind(this)}
            />
          }
        case 'date':
          return {
            ...field,

            component: <DatePicker
              className='date-input'
              name={field.name}
              required
              selected={moment(this.state[field.name])}
              onChange={this.handleChangeDate.bind(this, field.name)}
            />
        }
      }
    });

    return (
      <form onSubmit={this.handleSubmit.bind(this)} className={classNames('form', this.props.className)}>
        <table>
          <thead></thead>
          <tbody>
            {inputs.map((input, index) => (<tr key={index}><th>{`${DICT[input.name]}: `}</th><td>{input.component}</td></tr>))}
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
