import React from 'react';
import { Link } from 'react-router';
import styles from './KPIs.scss';

const KPIs = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>KPIs</h2>
      </div>
      <div className={styles.text}>
        <h3>Hacemos que tu empresa tenga un excelente desempeño</h3>
        <p>
          Utilizamos métricas que nos ayudan a medir y a cuantificar el rendimiento del progreso en
          función de unas metas y objetivos planteados para las distintas actividades que llevan a
          cabo nuestros clientes en sus empresas.
        </p>
      </div>
      <div className={styles.image}>
        <img src={require('./kpi.svg')} alt="Key Performance Indicators" />
      </div>
      <div className={styles.button}>
        <Link to="/contacto">Quiero esto</Link>
      </div>
    </div>
  </div>
);

export default KPIs;
