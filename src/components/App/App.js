import React, { Component } from 'react';
import CountryFinder from '../CountryFinder/CountryFinder';
import Doughnut from '../Charts/DoughNut';
require('./App.css');

class App extends Component {
  render() {
    return (
      <div className="app">
        <CountryFinder />
        <Doughnut />
      </div>
    );
  }
}

export default App;
