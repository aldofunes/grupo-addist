import React, {Component} from 'react';
import Banner from './Banner';
import Grow from './Grow';
import Benefits from './Benefits';

class Employees extends Component {
  componentDidMount() {
    // TODO: track pageview
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
