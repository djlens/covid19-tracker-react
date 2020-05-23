import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './DoughNut.module.css';

class Chart extends Component {
  state = {};

  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          totalCases: json['Global'].TotalConfirmed,
          data: {
            datasets: [
              {
                data: [
                  json['Global'].TotalDeaths,
                  json['Global'].TotalRecovered,
                ],
                backgroundColor: ['#CB5C5C', '#69D274'],
              },
            ],

            labels: ['Total deaths', 'Total recovered'],
          },
        })
      );
  }

  renderStats() {}

  render() {
    return (
      <div className={styles.chart}>
        <Doughnut data={this.state.data} />
        <p>{this.state.totalCases} confirmed</p>
      </div>
    );
  }
}

export default Chart;
