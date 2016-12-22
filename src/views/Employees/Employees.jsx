import React, { Component } from 'react';
import Banner from './Banner';
import Benefits from './Benefits';
import Work from './Work';
import Application from './Application';

class Employees extends Component {
  componentDidMount() {
    _gs('track');
  }

  render() {
    return (
      <div>
        <Banner />
        <Benefits />
        <Work />
        <Application />
      </div>
    );
  }
}

export default Employees;
