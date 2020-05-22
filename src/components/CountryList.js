import React, { Component } from 'react';
import CountryItem from './CountryItem';

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedCountries: [...props.renderedCountries],
      inputValue: props.inputValue,
    };
  }

  renderCountries = () => {
    return this.state.renderedCountries.map((c) => {
      return (
        <CountryItem
          key={this.state.renderedCountries.indexOf(c) + 1}
          info={c}
        />
      );
    });
  };

  static getDerivedStateFromProps = (newProps) => {
    return {
      renderedCountries: newProps.renderedCountries,
      inputValue: newProps.inputValue,
    };
  };

  render() {
    if (!this.state.inputValue) return null;
    return this.renderCountries().length === 0 ? (
      <li>No matches</li>
    ) : (
      <ul>{this.renderCountries()}</ul>
    );
  }
}

export default CountryList;
