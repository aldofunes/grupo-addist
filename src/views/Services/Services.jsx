import React, { Component } from 'react';
import Banner from './Banner';
import Recruitment from './Recruitment';
import Payroll from './Payroll';
import KPIs from './KPIs';
import ThreePL from './ThreePL';

class Services extends Component {
  componentDidMount() {
    _gs('track');
  }

  render() {
    return (
      <div>
        <Banner />
        <Recruitment />
        <Payroll />
        <KPIs />
        <ThreePL />
      </div>
    );
  }
}

export default Services;
