import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={require('./growth.svg')} alt="Growth" />
      </div>
      <div className={styles.text}>
        <h1>Únete a las empresas que crecen con nosotros</h1>
      </div>
    </div>
  </div>
);

export default Banner;
