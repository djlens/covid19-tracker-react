import React, { useState, useEffect } from 'react';
import CountryFinder from '../CountryFinder/CountryFinder';
import Charts from '../Charts/Charts';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { BoxLoading } from 'react-loadingg';
import numberWithCommas from '../../functions/numberWithCommas';
require('./App.css');

const App = () => {
  const [countries, setCountries] = useState([]);
  const [lineChartData, setLineChartData] = useState({});
  const [errorOccured, setErrorOccured] = useState(false);
  const [fetch1Ready, setFetch1Ready] = useState(false);
  const [fetch2Ready, setFetch2Ready] = useState(false);
  const [countryChoice, setCountryChoice] = useState(0);
  const [countryInfo, setCountryInfo] = useState({
    capital: 'Poland 🇵🇱',
    population: '7,600,000,000',
    area: '510,100,000',
  });

  useEffect(() => {
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
        setCountries(json.Countries);
        setFetch1Ready(true);
      })
      .catch((err) => {
        setErrorOccured(true);
      });

    fetch('https://covid19.mathdro.id/api/daily')
      .then((res) => res.json())
      .then((json) => {
        setLineChartData({
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
        });
        setFetch2Ready(true);
      })
      .catch((err) => {
        setErrorOccured(true);
      });
  }, []);

  const handleCountryChoice = (country) => {
    setCountryChoice(country);
  };

  useEffect(() => {
    if (countryChoice > 0) {
      fetch(
        'https://restcountries.eu/rest/v2/alpha/' +
          String(countries[countryChoice].CountryCode)
      )
        .then((res) => res.json())
        .then((json) => {
          setCountryInfo({
            capital: json.capital,
            population: numberWithCommas(json.population),
            area: numberWithCommas(json.area),
            flag: json.flag,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setCountryInfo({
        capital: 'Poland 🇵🇱',
        timezones: '-',
        population: '7,600,000,000',
        area: '510,100,000',
      });
    }
  }, [countryChoice, countries]);

  if (fetch1Ready && fetch2Ready) {
    return (
      <div className="app">
        <CountryFinder
          countries={countries}
          onCountryChoice={handleCountryChoice}
        />
        <Charts
          countries={countries}
          countryChoice={countryChoice}
          countryInfo={countryInfo}
          lineData={lineChartData}
        />
      </div>
    );
  }
  if (errorOccured) {
    return <ErrorMessage />;
  } else {
    return <BoxLoading />;
  }
};

export default App;
