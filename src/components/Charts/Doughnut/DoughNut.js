import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './DoughNut.module.css';

const Chart = (props) => {
  return (
    <div className={styles.chart}>
      <div>
        <Doughnut data={props.data} />
        <p>{props.data.totalCases} confirmed</p>
      </div>
    </div>
  );
};

export default Chart;
