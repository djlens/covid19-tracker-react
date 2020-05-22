import React, { Component } from 'react';

class CountryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.props.info.Country,
      totalConfirmed: this.props.info.TotalConfirmed,
      totalDeaths: this.props.info.TotalDeaths,
      totalRecovered: this.props.info.TotalRecovered,
      newCofnirmed: this.props.info.NewConfirmed,
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
        {/* <div className="stats-hidden">
            <span class="label">Total cases confirmed: </span><span class="value">${numberWithCommas(
              result.TotalConfirmed
            )}</span>
            <span class="label">Total deaths confirmed: </span><span class="value">${numberWithCommas(
              result.TotalDeaths
            )}</span>
            <span class="label">Total recoveries confirmed: </span><span class="value">${numberWithCommas(
              result.TotalRecovered
            )}</span>

            <span class="label">New cases confirmed: </span><span class="value">${numberWithCommas(
              result.NewConfirmed
            )}</span>
            <span class="label">New deaths confirmed: </span><span class="value">${numberWithCommas(
              result.NewDeaths
            )}</span>
            <span class="label">New recoveries confirmed: </span><span class="value">${numberWithCommas(
              result.NewRecovered
            )}</span>
        </div> */}
      </li>
    );
  }
}

export default CountryItem;
