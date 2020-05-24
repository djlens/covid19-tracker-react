import React, { Component } from 'react';
import CountryFinder from '../CountryFinder/CountryFinder';
import Charts from '../Charts/Charts';
require('./App.css');

class App extends Component {
  state = {
    isLoading: true,
    countryChoice: 0,
  };

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then((json) => {
        json.Countries.unshift({
          Country: 'Global',
          TotalDeaths: json['Global'].TotalDeaths,
          TotalRecovered: json['Global'].TotalRecovered,
          TotalConfirmed: json['Global'].TotalConfirmed,
        });
        this.setState({
          countries: json.Countries,
          isLoading: false,
        });
      });
  }

  handleCountryChoice = (country) => {
    this.setState({ countryChoice: country });
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
          />
        </div>
      );
    } else return null;
  }
}

export default App;
