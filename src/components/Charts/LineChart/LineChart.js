import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import styles from './LineChart.module.css';

class LineChart extends Component {
  state = {};
  render() {
    return (
      <div className={styles.chart}>
        <Line data={this.props.data} />
      </div>
    );
  }
}

export default LineChart;
