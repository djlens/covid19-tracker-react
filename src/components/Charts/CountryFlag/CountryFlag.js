import React, { Component } from 'react';
// import ReactCountryFlag from 'react-country-flag';
import styles from './CountryFlag.module.css';

class CountryName extends Component {
  state = {};

  renderCountryInfo = () => {
    return (
      <div className={styles.countryInfo}>
        <p>Capital: {this.props.data.countryInfo.capital}</p>
        <p>Population: {this.props.data.countryInfo.population}</p>
        <p>Area: {this.props.data.countryInfo.area}</p>
      </div>
    );
  };

  renderCountryFlag = () => {
    return this.props.data.countryCode ? (
      <div className={styles.flag}>
        <img alt="Country flag" src={this.props.data.countryInfo.flag} />
      </div>
    ) : null;
  };

  render() {
    return (
      <div className={styles.country}>
        {this.renderCountryFlag()}
        <div>
          <p
            style={{ fontSize: '1.2em', fontWeight: 700, marginBottom: '1em' }}
          >
            {this.props.data.countryName}
          </p>
          {this.renderCountryInfo()}
        </div>
      </div>
    );
  }
}

export default CountryName;