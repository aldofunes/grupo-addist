import React, { Component } from 'react';
import Banner from './Banner';
import Grow from './Grow';
import Benefits from './Benefits';

class Employees extends Component {
  componentDidMount() {
    _gs('track');
  }

  render() {
    return (
      <div>
        <Banner />
        <Grow />
        <Benefits />
      </div>
    );
  }
}

export default Employees;
