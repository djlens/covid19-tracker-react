import React, { Component } from 'react';
import styles from './CountryItem.module.css';
import ReactCountryFlag from 'react-country-flag';

class CountryItem extends Component {
  state = { showStats: false };

  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // renderName = () => {
  //   return (
  //     <span>
  //       {this.props.info.Country.replace(
  //         this.props.inputValue,
  //         <span className="country__item--highlight">
  //           {this.props.inputValue}
  //         </span>
  //       )}
  //     </span>
  //   );
  // };

  render() {
    return (
      <li>
        <div className={styles.country__item}>
          <div>
            {this.props.countryName}
            <ReactCountryFlag
              style={{ marginLeft: '0.5em' }}
              className="emojiFlag"
              countryCode={this.props.countryCode}
            />
          </div>
          <span>{this.numberWithCommas(this.props.totalConfirmed)}</span>
        </div>
      </li>
    );
  }
}

export default CountryItem;
