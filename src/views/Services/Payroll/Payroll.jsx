import React from 'react';
import { Link } from 'react-router';
import styles from './Payroll.scss';

const Payroll = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Maquila de nómina</h2>
      </div>
      <div className={styles.image}>
        <img src={require('./payroll.svg')} alt="Reclutamiento" />
      </div>
      <div className={styles.text}>
        <h3>Aumenta tu productividad y déjanos la administración de tu nómina</h3>
        <p>
          Seremos tu área operativa de nómina. Cumple tus obligaciones generadas de la gestión de la
          nómina sin esfuerzo. Nuestro objetivo es apoyar a nuestros clientes para que puedan
          enfocarse en las tareas que agregan valor a su negocio
        </p>
      </div>
      <div className={styles.button}>
        <Link to="/contacto">Quiero esto</Link>
      </div>
    </div>
  </div>
);

export default Payroll;
