import React, { useState } from 'react';
import CountryList from '../CountryList/CountryList';
import styles from './CountryFinder.module.css';

const CountryFinder = (props) => {
  const [renderedCountries, setRenderedCountries] = useState(
    props.countries.map((country, index) => {
      country.index = index;
      return country;
    })
  );

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    findCountries();
  };

  const findCountries = () => {
    const filteredCountries = props.countries.filter((country) => {
      const exp = new RegExp(inputValue, 'gi');
      return country.Country.match(exp);
    });
    setRenderedCountries(filteredCountries);
  };

  return (
    <div className={styles.pannel}>
      <input
        className={styles.pannel__finder}
        type="text"
        value={inputValue}
        placeholder="Find a country"
        onChange={handleChange}
      />
      <div className={styles.pannel__list}>
        <CountryList
          renderedCountries={renderedCountries}
          inputValue={inputValue}
          onCountryChoice={props.onCountryChoice}
        />
      </div>
    </div>
  );
};

export default CountryFinder;
