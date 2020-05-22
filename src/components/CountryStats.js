import React, { Component } from 'react';

class CountryStats extends Component {
  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  render() {
    return (
      <div className="stats-hidden">
        <span className="label">Total cases confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.props.info.TotalConfirmed)}
        </span>
        <span className="label">Total deaths confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.props.info.TotalDeaths)}
        </span>
        <span className="label">Total recoveries confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.props.info.TotalRecovered)}
        </span>

        <span className="label">New cases confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.props.info.NewConfirmed)}
        </span>
        <span className="label">New deaths confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.props.info.NewDeaths)}
        </span>
        <span className="label">New recoveries confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.props.info.NewRecovered)}
        </span>
      </div>
    );
  }
}

export default CountryStats;
