import React, { Component } from 'react';
import CountryStats from './CountryStats';

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

  render() {
    return (
      <li onClick={this.handleShowStats}>
        <div className="country-hl">
          <span className="country">{this.props.info.Country}</span>
          <span className="total">
            {this.numberWithCommas(this.props.info.TotalConfirmed)}
          </span>
        </div>
        {this.showStats()}
      </li>
    );
  }
}

export default CountryItem;
