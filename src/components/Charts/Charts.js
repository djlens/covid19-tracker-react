import React from 'react';
import Doughnut from './Doughnut/DoughNut';
import NewCases from './NewCases/NewCases';
import CountryName from './CountryFlag/CountryFlag';
import styles from './Charts.module.css';
import LineChart from './LineChart/LineChart';

const Charts = (props) => {
  const handleTotalData = () => {
    const totalData = {
      totalCases: props.countries[props.countryChoice].TotalConfirmed,
      datasets: [
        {
          data: [
            props.countries[props.countryChoice].TotalDeaths,
            props.countries[props.countryChoice].TotalRecovered,
            props.countries[props.countryChoice].TotalConfirmed -
              props.countries[props.countryChoice].TotalDeaths -
              props.countries[props.countryChoice].TotalRecovered,
          ],
          backgroundColor: ['#CB5C5C', '#69D274', '#DEDB71'],
        },
      ],

      labels: ['Total deaths', 'Total recovered', 'Active'],
    };
    return totalData;
  };

  const handleNewData = () => {
    const newData = {
      newConfirmed: props.countries[props.countryChoice].NewConfirmed,
      newDeaths: props.countries[props.countryChoice].NewDeaths,
      newRecovered: props.countries[props.countryChoice].NewRecovered,
    };
    return newData;
  };

  const displayCountry = () => {
    return {
      countryCode: props.countries[props.countryChoice].CountryCode,
      countryName: props.countries[props.countryChoice].Country,
      countryInfo: props.countryInfo,
    };
  };

  const renderChart = () => {
    if (props.countryChoice > 0) {
      return <Doughnut data={handleTotalData()} />;
    } else {
      return <LineChart data={props.lineData} />;
    }
  };

  return (
    <div className={styles.charts}>
      <div className={styles.charts__country}>
        <CountryName data={displayCountry()} />
        <NewCases data={handleNewData()} />
      </div>
      {renderChart()}
    </div>
  );
};

export default Charts;
