import React, { Component } from 'react';
import CountryFinder from '../CountryFinder/CountryFinder';
import Charts from '../Charts/Charts';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { BoxLoading } from 'react-loadingg';
import numberWithCommas from '../../functions/numberWithCommas';
require('./App.css');

class App extends Component {
  state = {
    errorOccured: false,
    fetch1Ready: false,
    fetch2Ready: false,
    countryChoice: 0,
    countryInfo: {
      capital: 'Poland 🇵🇱',
      population: '7,600,000,000',
      area: '510,100,000',
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
          fetch1Ready: true,
        });
      })
      .catch((err) => {
        this.setState({
          errorOccured: true,
        });
      });
    fetch('https://covid19.mathdro.id/api/daily')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          lineData: {
            labels: json.map((json) => json.reportDate),
            datasets: [
              {
                data: json.map((json) => json.confirmed.total),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
              },
              {
                data: json.map((json) => json.deaths.total),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },
            ],
          },
          fetch2Ready: true,
        });
      })
      .catch((err) => {
        this.setState({
          errorOccured: true,
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
                population: numberWithCommas(json.population),
                area: numberWithCommas(json.area),
                flag: json.flag,
              },
            });
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        this.setState({
          countryInfo: {
            capital: 'Poland 🇵🇱',
            timezones: '-',
            population: '7,600,000,000',
            area: '510,100,000',
          },
        });
      }
    });
  };

  render() {
    if (this.state.fetch1Ready && this.state.fetch2Ready) {
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
            lineData={this.state.lineData}
          />
        </div>
      );
    }
    if (this.state.errorOccured) {
      return <ErrorMessage />;
    } else {
      return <BoxLoading />;
    }
  }
}

export default App;
