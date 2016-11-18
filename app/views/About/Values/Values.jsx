import React from 'react';
import styles from './Values.scss';
import Value from './Value';

const Values = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <Value
        image={require('./team-relationship.svg')}
        title="Sentido de pertenencia"
        body="Nos sentimos orgullosos de formar parte de ADDIST y estamos comprometidos con su misión, visión y valores"
      />
      <Value
        image={require('./handshake-agreement.svg')}
        title="Honestidad"
        body="Somos congruentes con lo que pensamos, decimos y hacemos. Lo que hacemos, lo hacemos con honradez y transparencia."
      />
      <Value
        image={require('./lifebuoy.svg')}
        title="Servicio"
        body="Gracias a nuestra mejora continua logramos satisfacer las necesidades y expectativas de nuestros clientes."
      />
      <Value
        image={require('./team-leader.svg')}
        title="Trabajo en equipo"
        body="Estamos disponibles para nuestros clientes. Trabajamos en conjunto, sumando fuerzas para lograr mejores resultados."
      />
      <Value
        image={require('./consulting-manager.svg')}
        title="Responsabilidad"
        body="Nos comprometemos y cumplimos con nuestras actividades laborales adhiriéndonos a políticas y procedimientos establecidos."
      />
    </div>
  </div>
);

export default Values;
