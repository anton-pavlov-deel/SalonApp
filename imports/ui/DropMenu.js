import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';

export default class DropMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.currentItem ? props.currentItem.name : ''
    }
  }

  componentWillReceiveProps(props) {
    if (props.currentItem) {
      this.setState({
        value: props.currentItem.name
      });
    }
  }

  componentDidMount() {
    let initialItem = _.intersectionBy(this.props.items, [{name: this.state.value}], 'name');
    initialItem = initialItem ? initialItem[0] : {};

    this.body.style.display = 'none';

    this.props.onChange(initialItem);
  }

  handleChange(value) {
    this.setState({
      value: value.name
    });
    this.body.style.display = 'none';
    this.props.onChange(value);
  }

  handleHeaderClick() {
    const display = this.body.style.display;

    this.body.style.display = display === 'none' ? 'block' : 'none';
  }

  render() {
    const items = this.props.items;

    return (
        <div className={classNames('dropmenu', this.props.className)}>
            <div className={'dropmenu-header'} onClick={this.handleHeaderClick.bind(this)}>
              {this.state.value}<div className='arrow-wrapper'>&#11015;</div>
            </div>
            <div className={'dropmenu-body'} ref={ref => {this.body = ref}}>
              <ul>
                {items.map((item, index) => (<li
                  key={index}
                  onClick={this.handleChange.bind(this, item)}
                  >{item.name}
                </li>))}
              </ul>
            </div>
        </div>
    );
  }
}
