import React, { Component } from 'react';
import styles from './NewCases.module.css';

class NewCases extends Component {
  state = {};

  numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  render() {
    return (
      <div className={styles.newData}>
        <div className={styles.newCases}>
          New cases today:{' '}
          <span>{this.numberWithCommas(this.props.data.newConfirmed)}</span>
        </div>
        <div className={styles.newDeaths}>
          New deaths today:{' '}
          <span>{this.numberWithCommas(this.props.data.newDeaths)}</span>
        </div>
        <div className={styles.newRecovered}>
          New recovered today:{' '}
          <span>{this.numberWithCommas(this.props.data.newRecovered)}</span>
        </div>
      </div>
    );
  }
}

export default NewCases;
