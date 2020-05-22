import React, { Component } from 'react';
import CountryStats from './CountryStats';

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
      showStats: false,
    };
  }

  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  static getDerivedStateFromProps = (newProps, state) => {
    return {
      countryName: newProps.info.Country,
      totalConfirmed: newProps.info.TotalConfirmed,
      totalDeaths: newProps.info.TotalDeaths,
      totalRecovered: newProps.info.TotalRecovered,
      newCofnirmed: newProps.info.NewConfirmed,
      newDeaths: newProps.info.NewDeaths,
      newRecovered: newProps.info.NewRecovered,
    };
  };

  handleShowStats = () => {
    this.setState({ showStats: !this.state.showStats });
  };

  showStats = () => {
    return this.state.showStats ? <CountryStats info={this.state} /> : null;
  };

  render() {
    return (
      <li onClick={this.handleShowStats}>
        <div className="country-hl">
          <span className="country">{this.state.countryName}</span>
          <span className="total">
            {this.numberWithCommas(this.state.totalConfirmed)}
          </span>
        </div>
        {this.showStats()}
      </li>
    );
  }
}

export default CountryItem;
