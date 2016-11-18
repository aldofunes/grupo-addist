import React from 'react';
import styles from './Competitive.scss';

const Competitive = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.column}>
        <h2>Sé más competitivo</h2>
        <h4>
          Nuestros clientes son más competitivos y flexibles gracias a nuestros servicios de tercerización
        </h4>
      </div>
      <div className={styles.column}>
        <img className={styles.image} src={require('./competitiveness.jpg')} alt="Competitividad" />
      </div>
      <div className={styles.column}>
        <a className={styles.button}>Contáctanos</a>
      </div>
    </div>
  </section>
);

export default Competitive;
