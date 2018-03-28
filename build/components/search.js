"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoDemo = void 0;

const {
  h,
  render,
  Component,
  Text
} = require('ink');

const AutoComplete = require('ink-autocomplete'); // Demo


class AutoDemo extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      selected: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render(props, {
    value,
    selected
  }) {
    const countries = [{
      label: 'United Kingdom',
      value: {
        country: 'United Kingdom',
        capital: 'London'
      }
    }, {
      label: 'United States',
      value: {
        country: 'United States',
        capital: 'Washington DC'
      }
    }, {
      label: 'United Arab Emirates',
      value: {
        country: 'United Arab Emirates',
        capital: 'Abu Dhabi'
      }
    }];
    return h("div", null, h(Text, {
      green: true
    }, 'Enter your country: '), h(AutoComplete, {
      value: value,
      placeholder: 'Type a country',
      items: countries,
      onChange: this.handleChange,
      onSubmit: this.handleSubmit
    }), selected && h("span", null, h(Text, null, "The capital of your country is: "), h(Text, {
      red: true
    }, selected.value.capital)));
  }

  handleChange(value) {
    this.setState({
      value,
      selected: null
    });
  }

  handleSubmit(selected) {
    this.setState({
      selected
    });
  }

}

exports.AutoDemo = AutoDemo;