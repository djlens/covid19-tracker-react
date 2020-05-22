import React, { Component } from 'react';
import CountryList from '../CountryList/CountryList';
import styles from './CountryFinder.module.css';

class CountryFinder extends Component {
  state = {
    countries: [],
    renderedCountries: [],
    isLoaded: false,
    inputValue: '',
  };

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then((json) => {
        json.Countries.forEach((c) => (c.key = json.Countries.indexOf(c) + 1));
        this.setState({ countries: json.Countries, isLoaded: true });
      });
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value }, this.findCountries);
  };

  findCountries = () => {
    const filteredCountries = this.state.countries.filter((country) => {
      const exp = new RegExp(this.state.inputValue, 'gi');
      return country.Country.match(exp);
    });
    this.setState({ renderedCountries: filteredCountries });
  };

  // renderCountries = () => {
  //   let renderedCountries;
  //   if (!this.state.inputValue) {
  //     renderedCountries = '';
  //   } else {
  //     renderedCountries = this.state.renderedCountries.map((c) => {
  //       return (
  //         <CountryItem
  //           key={this.state.renderedCountries.indexOf(c) + 1}
  //           info={c}
  //         />
  //       );
  //     });
  //   }

  //   return renderedCountries;
  // };

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
          />
        </div>
      </div>
    );
  }
}

export default CountryFinder;
