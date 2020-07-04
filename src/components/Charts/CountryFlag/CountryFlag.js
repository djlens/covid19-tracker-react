import React from 'react';
import styles from './CountryFlag.module.css';

const CountryName = (props) => {
  const renderCountryInfo = () => {
    return (
      <div className={styles.countryInfo}>
        <p>Capital: {props.data.countryInfo.capital}</p>
        <p>Population: {props.data.countryInfo.population}</p>
        <p>Area: {props.data.countryInfo.area} km²</p>
      </div>
    );
  };

  const renderCountryFlag = () => {
    return props.data.countryCode ? (
      <div className={styles.flag}>
        <img alt="Country flag" src={props.data.countryInfo.flag} />
      </div>
    ) : null;
  };

  return (
    <div className={styles.country}>
      {renderCountryFlag()}
      <div>
        <p style={{ fontSize: '1.2em', fontWeight: 700, marginTop: 0 }}>
          {props.data.countryName}
        </p>
        {renderCountryInfo()}
      </div>
    </div>
  );
};

export default CountryName;
