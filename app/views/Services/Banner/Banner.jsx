import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <h1 className={styles.text}>
        El mejor personal
        <br />
        <small>sin esfuerzo</small>
      </h1>
    </div>
  </div>
);

export default Banner;
