import React, { Component } from 'react';
import CountryList from '../CountryList/CountryList';
import styles from './CountryFinder.module.css';

class CountryFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedCountries: props.countries.map((country, index) => {
        country.index = index;
        return country;
      }),
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value }, this.findCountries);
  };

  findCountries = () => {
    const filteredCountries = this.props.countries.filter((country) => {
      const exp = new RegExp(this.state.inputValue, 'gi');
      return country.Country.match(exp);
    });
    this.setState({ renderedCountries: filteredCountries });
  };

  render() {
    return (
      <div className={styles.pannel}>
        <input
          className={styles.pannel__finder}
          type="text"
          value={this.state.inputValue}
          placeholder="Find a country"
          onChange={this.handleChange}
        />
        <div className={styles.pannel__list}>
          <CountryList
            renderedCountries={this.state.renderedCountries}
            inputValue={this.state.inputValue}
            onCountryChoice={this.props.onCountryChoice}
          />
        </div>
      </div>
    );
  }
}

export default CountryFinder;
