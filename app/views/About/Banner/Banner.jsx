import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <div className={styles.section}>
    <div className={styles.logo}>
      <img src={require('./logo.svg')} alt="ADDIST" />
    </div>
    <div className={styles.text}>
      <h1>Grupo ADDIST S de RL de CV</h1>
    </div>
  </div>
);

export default Banner;
