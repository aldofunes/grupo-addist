import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.column}>
        <h1>Tu socio de negocios</h1>
        <h3>Nuestra misión es que alcances tus metas</h3>
      </div>
      <div className={styles.column}>
        <img src={require('./outsourcing.svg')} alt="Tercerización" />
      </div>
    </div>
  </section>
);

export default Banner;
