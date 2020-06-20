import React, { Component } from 'react';
import styles from './CountryItem.module.css';
import ReactCountryFlag from 'react-country-flag';
import numberWithCommas from '../../functions/numberWithCommas';

class CountryItem extends Component {
  renderFlag = () => {
    return this.props.countryCode ? (
      <ReactCountryFlag
        style={{ marginLeft: '0.5em' }}
        className="emojiFlag"
        countryCode={this.props.countryCode}
      />
    ) : null;
  };

  render() {
    return (
      <li onClick={() => this.props.onCountryChoice(this.props.index)}>
        <div className={styles.country__item}>
          <div>
            {this.props.countryName}
            {this.renderFlag()}
          </div>
          <span>{numberWithCommas(this.props.totalConfirmed)}</span>
        </div>
      </li>
    );
  }
}

export default CountryItem;
