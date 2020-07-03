import React from 'react';
import styles from './CountryItem.module.css';
import ReactCountryFlag from 'react-country-flag';
import numberWithCommas from '../../functions/numberWithCommas';

const CountryItem = (props) => {
  const renderFlag = () => {
    return props.countryCode ? (
      <ReactCountryFlag
        style={{ marginLeft: '0.5em' }}
        className="emojiFlag"
        countryCode={props.countryCode}
      />
    ) : null;
  };

  return (
    <li onClick={() => props.onCountryChoice(props.index)}>
      <div className={styles.country__item}>
        <div>
          {props.countryName}
          {renderFlag()}
        </div>
        <span>{numberWithCommas(props.totalConfirmed)}</span>
      </div>
    </li>
  );
};

export default CountryItem;
