import React from 'react';
import styles from './Experience.scss';

const Experience = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.years}>
        <h1>
          17 <br />
          <small>años de experiencia</small>
        </h1>
      </div>
      <div className={styles.description}>
        <h4>
          Ofrecemos servicios de tercerización (outsourcing) y nos especializamos en la
          administración de nóminas, recursos humanos, contabilidad y planeamos y ejecutamos
          operaciones logísticas.
        </h4>
      </div>
    </div>
  </div>
);

export default Experience;
