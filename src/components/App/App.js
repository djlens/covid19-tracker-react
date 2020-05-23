import React, { Component } from 'react';
import CountryFinder from '../CountryFinder/CountryFinder';
import Doughnut from '../Charts/DoughNut';
require('./App.css');

class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          totalCases: json['Global'].TotalConfirmed,
          data: {
            datasets: [
              {
                data: [
                  json['Global'].TotalDeaths,
                  json['Global'].TotalRecovered,
                ],
                backgroundColor: ['#CB5C5C', '#69D274'],
              },
            ],

            labels: ['Total deaths', 'Total recovered'],
          },
          countries: json.Countries,
          isLoading: false,
        });
      });
  }

  handleCountryChoice = (country) => {};

  render() {
    if (!this.state.isLoading) {
      return (
        <div className="app">
          <CountryFinder countries={this.state.countries} />
          <Doughnut data={this.state.data} totalCases={this.state.totalCases} />
        </div>
      );
    } else return null;
  }
}

export default App;
