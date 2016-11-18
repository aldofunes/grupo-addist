import React from 'react';
import {Link} from 'react-router';
import styles from './Ease.scss';

const Competitive = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.column}>
        <h2>Tranquilidad</h2>
        <h4>
          Nos encargamos de tus necesidades para que cumplas tus objetivos
        </h4>
      </div>
      <div className={`${styles.column} ${styles.imageColumn}`}>
        <img className={styles.image} src={require('./warehouse.jpg')} alt="Tranquilidad" />
      </div>
      <div className={styles.column}>
        <Link to="/contacto" className={styles.button}>Contáctanos</Link>
      </div>
    </div>
  </section>
);

export default Competitive;
