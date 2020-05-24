import React, { Component } from 'react';
import CountryFinder from '../CountryFinder/CountryFinder';
import Charts from '../Charts/Charts';
require('./App.css');

class App extends Component {
  state = {
    isLoading: true,
    countryChoice: 0,
    countryInfo: {
      capital: '-',
      timezones: '-',
      population: '-',
      area: '-',
    },
  };

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then((json) => {
        json.Countries.unshift({
          Country: 'Global 🌍',
          TotalDeaths: json['Global'].TotalDeaths,
          TotalRecovered: json['Global'].TotalRecovered,
          TotalConfirmed: json['Global'].TotalConfirmed,
          NewDeaths: json['Global'].NewDeaths,
          NewRecovered: json['Global'].NewRecovered,
          NewConfirmed: json['Global'].NewConfirmed,
        });
        this.setState({
          countries: json.Countries,
          isLoading: false,
        });
      });
  }

  handleCountryChoice = (country) => {
    this.setState({ countryChoice: country }, () => {
      if (this.state.countryChoice > 0) {
        fetch(
          'https://restcountries.eu/rest/v2/alpha/' +
            String(this.state.countries[this.state.countryChoice].CountryCode)
        )
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              countryInfo: {
                capital: json.capital,
                timezones: json.timezones,
                population: json.population,
                area: json.area,
                flag: json.flag,
              },
            });
          });
      } else {
        this.setState({
          countryInfo: {
            capital: '-',
            timezones: '-',
            population: '-',
            area: '-',
          },
        });
      }
    });
  };

  render() {
    if (!this.state.isLoading) {
      return (
        <div className="app">
          <CountryFinder
            countries={this.state.countries}
            onCountryChoice={this.handleCountryChoice}
          />
          <Charts
            countries={this.state.countries}
            countryChoice={this.state.countryChoice}
            countryInfo={this.state.countryInfo}
          />
        </div>
      );
    } else return null;
  }
}

export default App;
