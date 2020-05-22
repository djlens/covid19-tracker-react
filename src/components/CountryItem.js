import React, { Component } from 'react';

class CountryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.props.info.Country,
      totalConfirmed: this.props.info.TotalConfirmed,
      totalDeaths: this.props.info.TotalDeaths,
      totalRecovered: this.props.info.TotalRecovered,
      newConfirmed: this.props.info.NewConfirmed,
      newDeaths: this.props.info.NewDeaths,
      newRecovered: this.props.info.NewRecovered,
    };
  }

  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  static getDerivedStateFromProps = (newProps, state) => {
    if (newProps.info.Country !== state.countryName) {
      return {
        countryName: newProps.info.Country,
        totalConfirmed: newProps.info.TotalConfirmed,
        totalDeaths: newProps.info.TotalDeaths,
        totalRecovered: newProps.info.TotalRecovered,
        newCofnirmed: newProps.info.NewConfirmed,
        newDeaths: newProps.info.NewDeaths,
        newRecovered: newProps.info.NewRecovered,
      };
    }
    return null;
  };

  render() {
    return (
      <li>
        <div className="country-hl">
          <span className="country">{this.state.countryName}</span>
          <span className="total">
            {this.numberWithCommas(this.state.totalConfirmed)}
          </span>
        </div>
        {/* <div className="stats-hidden" style={{ display: 'none' }}>
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
        </div> */}
      </li>
    );
  }
}

export default CountryItem;
