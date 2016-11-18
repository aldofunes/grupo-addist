import React from 'react';
import Banner from './Banner';
import Experience from './Experience';
import Values from './Values';

class About extends React.Component {
  componentDidMount() {
    // TODO: Track pageview
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
