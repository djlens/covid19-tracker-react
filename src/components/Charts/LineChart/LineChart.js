import React from 'react';
import { Line } from 'react-chartjs-2';
import styles from './LineChart.module.css';

function LineChart(props) {
  return (
    <div className={styles.chart}>
      <Line data={props.data} />
    </div>
  );
}

export default LineChart;
