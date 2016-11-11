import React from 'react';
import styles from './Home.scss';

class Home extends React.Component {
  componentDidMount() {
    _gs('track');
    _gs('event', 'Testing integration');
  }
  render() {
    return (
      <div className={styles.home}>
        <h1>Home page</h1>
      </div>
    );
  }
}

export default Home;
