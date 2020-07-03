import React from 'react';
import CountryItem from '../CountryItem/CountryItem';
import styles from './CountryList.module.css';

const CountryList = (props) => {
  const renderCountries = () => {
    return props.renderedCountries.map((c) => {
      return (
        <CountryItem
          key={props.renderedCountries.indexOf(c) + 1}
          countryName={c.Country}
          totalConfirmed={c.TotalConfirmed}
          inputValue={props.inputValue}
          countryCode={c.CountryCode}
          onCountryChoice={props.onCountryChoice}
          index={c.index}
        />
      );
    });
  };

  const renderContent = () => {
    return renderCountries().length === 0 ? (
      <ul className={styles.country__list}>
        <li style={{ marginTop: '1em', paddingLeft: '1.5em' }}>No matches</li>
      </ul>
    ) : (
      <ul className={styles.country__list}>{renderCountries()}</ul>
    );
  };

  return <div>{renderContent()}</div>;
};

export default CountryList;
