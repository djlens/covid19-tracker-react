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
        json.Countries.unshift({
          Country: 'Global',
          TotalDeaths: json['Global'].TotalDeaths,
          TotalRecovered: json['Global'].TotalRecovered,
          TotalConfirmed: json['Global'].TotalConfirmed,
        });
        this.setState({
          doughnutData: {
            totalCases: json['Global'].TotalConfirmed,
            datasets: [
              {
                data: [
                  json['Global'].TotalDeaths,
                  json['Global'].TotalRecovered,
                  json['Global'].TotalConfirmed -
                    json['Global'].TotalDeaths -
                    json['Global'].TotalRecovered,
                ],
                backgroundColor: ['#CB5C5C', '#69D274', '#DEDB71'],
              },
            ],

            labels: ['Total deaths', 'Total recovered', 'Active'],
          },

          countries: json.Countries,
          isLoading: false,
        });
      });
  }

  handleCountryChoice = (country) => {
    this.setState({
      doughnutData: {
        totalCases: this.state.countries[country].TotalConfirmed,
        datasets: [
          {
            data: [
              this.state.countries[country].TotalDeaths,
              this.state.countries[country].TotalRecovered,
              this.state.countries[country].TotalConfirmed -
                this.state.countries[country].TotalDeaths -
                this.state.countries[country].TotalRecovered,
            ],
            backgroundColor: ['#CB5C5C', '#69D274', '#DEDB71'],
          },
        ],

        labels: ['Total deaths', 'Total recovered', 'Active'],
      },
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
          <Doughnut
            data={this.state.doughnutData}
            // totalCases={this.state.doughnutData.totalCases}
          />
        </div>
      );
    } else return null;
  }
}

export default App;
