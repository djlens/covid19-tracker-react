import React, { Component } from 'react';
import CountryItem from './CountryItem';

class CountryList extends Component {
  state = {};

  renderCountries = () => {};

  render() {
    return <ul>{this.renderCountries()}</ul>;
  }
}

export default CountryList;
