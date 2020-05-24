import React, { Component } from 'react';
import Doughnut from './Doughnut/DoughNut';

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

  render() {
    return (
      <div className="charts">
        <Doughnut data={this.handleTotalData()} />
      </div>
    );
  }
}

export default Charts;
