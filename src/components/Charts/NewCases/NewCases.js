import React, { Component } from 'react';
import styles from './NewCases.module.css';

class NewCases extends Component {
  state = {};
  render() {
    return (
      <div className={styles.newData}>
        <div className={styles.newCases}>
          New cases today: <span>{this.props.data.newConfirmed}</span>
        </div>
        <div className={styles.newDeaths}>
          New deaths today: <span>{this.props.data.newDeaths}</span>
        </div>
        <div className={styles.newRecovered}>
          New recovered today: <span>{this.props.data.newRecovered}</span>
        </div>
      </div>
    );
  }
}

export default NewCases;
