import React from 'react';
import styles from './NewCases.module.css';

const NewCases = (props) => {
  return (
    <div className={styles.newData}>
      <div>
        <div className={styles.newCases}>
          New cases today: <span>{props.data.newConfirmed}</span>
        </div>
        <div className={styles.newDeaths}>
          New deaths today: <span>{props.data.newDeaths}</span>
        </div>
        <div className={styles.newRecovered}>
          New recovered today: <span>{props.data.newRecovered}</span>
        </div>
      </div>
    </div>
  );
};

export default NewCases;
