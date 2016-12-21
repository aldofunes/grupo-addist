import React from 'react';
import { Link } from 'react-router';
import styles from './ThreePL.scss';

const ThreePL = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>3PL</h2>
      </div>
      <div className={styles.image}>
        <img src={require('./logistics.svg')} alt="Logistics" />
      </div>
      <div className={styles.text}>
        <h3>Proveemos funciones logísticas que permite optimizar la cadena entre empresas</h3>
        <p>
          Ofrecemos una solución logística externalizada totalmente integrada. Estudiamos y
          comprendemos las necesidades y los puntos débiles de nuestros clientes para así poder
          incrementar su productividad.
        </p>
      </div>
      <div className={styles.button}>
        <Link to="/contacto">Quiero esto</Link>
      </div>
    </div>
  </div>
);

export default ThreePL;
