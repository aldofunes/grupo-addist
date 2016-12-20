import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './styles/_globals.scss'

if (process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(<Routes />, document.getElementById('app'));
