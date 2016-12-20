import React from 'react';
import styles from './Benefits.scss';
import Benefit from './Benefit';

const Benefits = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <Benefit image={require('./law.svg')} title="Prestaciones justas" />
      <Benefit image={require('./contract.svg')} title="Seguridad laboral" />
    </div>
  </div>
);

export default Benefits;
