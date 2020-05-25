import React, { Component } from 'react';
import Doughnut from './Doughnut/DoughNut';
import NewCases from './NewCases/NewCases';
import CountryName from './CountryFlag/CountryFlag';
import styles from './Charts.module.css';
import LineChart from './LineChart/LineChart';

class Charts extends Component {
  handleTotalData = () => {
    const totalData = {
      totalCases: this.props.countries[this.props.countryChoice].TotalConfirmed,
      datasets: [
        {
          data: [
            this.props.countries[this.props.countryChoice].TotalDeaths,
            this.props.countries[this.props.countryChoice].TotalRecovered,
            this.props.countries[this.props.countryChoice].TotalConfirmed -
              this.props.countries[this.props.countryChoice].TotalDeaths -
              this.props.countries[this.props.countryChoice].TotalRecovered,
          ],
          backgroundColor: ['#CB5C5C', '#69D274', '#DEDB71'],
        },
      ],

      labels: ['Total deaths', 'Total recovered', 'Active'],
    };
    return totalData;
  };

  handleNewData = () => {
    const newData = {
      newConfirmed: this.props.countries[this.props.countryChoice].NewConfirmed,
      newDeaths: this.props.countries[this.props.countryChoice].NewDeaths,
      newRecovered: this.props.countries[this.props.countryChoice].NewRecovered,
    };
    return newData;
  };

  displayCountry = () => {
    return {
      countryCode: this.props.countries[this.props.countryChoice].CountryCode,
      countryName: this.props.countries[this.props.countryChoice].Country,
      countryInfo: this.props.countryInfo,
    };
  };

  renderChart = () => {
    if (this.props.countryChoice > 0) {
      return <Doughnut data={this.handleTotalData()} />;
    } else {
      return <LineChart data={this.props.lineData} />;
    }
  };

  render() {
    return (
      <div className={styles.charts}>
        <div className={styles.charts__country}>
          <CountryName data={this.displayCountry()} />
          <NewCases data={this.handleNewData()} />
        </div>
        {this.renderChart()}
      </div>
    );
  }
}

export default Charts;
