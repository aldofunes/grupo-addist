import React from 'react';
import styles from './Home.scss';
import Banner from './Banner';
import Experts from './Experts';
import Competitive from './Competitive';
import Ease from './Ease';

class Home extends React.Component {
  componentDidMount() {
    _gs('track');
  }
  render() {
    return (
      <div className={styles.home}>
        <Banner />
        <Experts />
        <Competitive />
        <Ease />
      </div>
    );
  }
}

export default Home;
