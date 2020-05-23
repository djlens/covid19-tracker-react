import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './DoughNut.module.css';

class Chart extends Component {
  renderStats() {}

  render() {
    return (
      <div className={styles.chart}>
        <Doughnut data={this.props.data} />
        <p>{this.props.data.totalCases} confirmed</p>
      </div>
    );
  }
}

export default Chart;
