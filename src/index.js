import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import FunctionalApp from './components/App/FunctionalApp';

ReactDOM.render(
  <React.StrictMode>
    <FunctionalApp />
  </React.StrictMode>,
  document.getElementById('root')
);
