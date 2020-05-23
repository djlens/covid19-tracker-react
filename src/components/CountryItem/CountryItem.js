import React, { Component } from 'react';
import CountryStats from '../CountryStats/CountryStats';
import styles from './CountryItem.module.css';
import ReactCountryFlag from 'react-country-flag';

class CountryItem extends Component {
  state = { showStats: false };

  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  handleShowStats = () => {
    this.setState({ showStats: !this.state.showStats });
  };

  showStats = () => {
    return this.state.showStats ? (
      <CountryStats info={this.props.info} />
    ) : null;
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
      <li onClick={this.handleShowStats}>
        <div className={styles.country__item}>
          <div>
            {this.props.info.Country}
            <ReactCountryFlag
              style={{ marginLeft: '0.5em' }}
              className="emojiFlag"
              countryCode={this.props.info.CountryCode}
            />
          </div>
          <span>{this.numberWithCommas(this.props.info.TotalConfirmed)}</span>
        </div>
        {this.showStats()}
      </li>
    );
  }
}

export default CountryItem;
