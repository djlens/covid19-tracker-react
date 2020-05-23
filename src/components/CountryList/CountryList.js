import React, { Component } from 'react';
import CountryItem from '../CountryItem/CountryItem';
import styles from './CountryList.module.css';

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedCountries: props.renderedCountries,
      inputValue: props.inputValue,
    };
  }

  static getDerivedStateFromProps = (newProps) => {
    return {
      renderedCountries: newProps.renderedCountries,
      inputValue: newProps.inputValue,
    };
  };

  renderCountries = () => {
    return this.state.renderedCountries.map((c) => {
      return (
        <CountryItem
          key={this.state.renderedCountries.indexOf(c) + 1}
          countryName={c.Country}
          totalConfirmed={c.TotalConfirmed}
          inputValue={this.state.inputValue}
          countryCode={c.CountryCode}
          onCountryChoice={this.props.onCountryChoice}
          index={c.index}
        />
      );
    });
  };

  render() {
    return this.renderCountries().length === 0 ? (
      <ul className={styles.country__list}>
        <li style={{ marginTop: '1em', paddingLeft: '1.5em' }}>No matches</li>
      </ul>
    ) : (
      <ul className={styles.country__list}>{this.renderCountries()}</ul>
    );
  }
}

export default CountryList;
