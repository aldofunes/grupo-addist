import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={require('./team.svg')} alt="Team" />
      </div>
      <div className={styles.text}>
        <h1>Sé parte de nuestro gran equipo</h1>
      </div>
    </div>
  </div>
);

export default Banner;
