import React from 'react';
import {Link} from 'react-router';
import styles from './Recruitment.scss';

const Recruitment = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Reclutamiento de personal administrativo y operativo</h2>
      </div>
      <div className={styles.text}>
        <h3>Hacemos más fácil el proceso de reclutamiento</h3>
        <p>
          Nuestro trabajo es buscar, encontrar, entrevistar y seleccionar a los mejores candidatos que nuestros clientes necesita para hacer crecer su empresa. Nuestro objetivo es atraer candidatos potencialmente cualificados capaces de tomar cargos en la organización.
        </p>
      </div>
      <div className={styles.image}>
        <img src={require('./recruitment.svg')} alt="Reclutamiento" />
      </div>
      <div className={styles.button}>
        <Link to="/contacto">Quiero esto</Link>
      </div>
    </div>
  </div>
);

export default Recruitment;
