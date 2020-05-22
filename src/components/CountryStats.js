import React, { Component } from 'react';

class CountryStats extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.info };
  }

  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  render() {
    return (
      <div className="stats-hidden">
        <span className="label">Total cases confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.state.totalConfirmed)}
        </span>
        <span className="label">Total deaths confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.state.totalDeaths)}
        </span>
        <span className="label">Total recoveries confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.state.totalRecovered)}
        </span>

        <span className="label">New cases confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.state.newConfirmed)}
        </span>
        <span className="label">New deaths confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.state.newDeaths)}
        </span>
        <span className="label">New recoveries confirmed: </span>
        <span className="value">
          {this.numberWithCommas(this.state.newRecovered)}
        </span>
      </div>
    );
  }
}

export default CountryStats;
