import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={require('./contact.svg')} alt="Contacto" />
      </div>
    </div>
  </div>
);

export default Banner;
