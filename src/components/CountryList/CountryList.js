import React, { Component } from 'react';
import CountryItem from '../CountryItem/CountryItem';
import styles from './CountryList.module.css';

class CountryList extends Component {
  renderCountries = () => {
    return this.props.renderedCountries.map((c) => {
      return (
        <CountryItem
          key={this.props.renderedCountries.indexOf(c) + 1}
          countryName={c.Country}
          totalConfirmed={c.TotalConfirmed}
          inputValue={this.props.inputValue}
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
