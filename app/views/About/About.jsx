import React from 'react';
import Banner from './Banner';
import Experience from './Experience';
import Values from './Values';

class About extends React.Component {
  componentDidMount() {
    _gs('track');
  }

  render() {
    return (
      <div>
        <Banner />
        <Experience />
        <Values />
      </div>
    );
  }
}

export default About;
