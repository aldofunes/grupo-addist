import React from 'react';
import styles from './Benefits.scss';
import Benefit from './Benefit';

const Benefits = () => (
  <div className={styles.section}>
    <div className={styles.container}>
      <Benefit
        image={require('./wallet.svg')}
        title="Ahorro de tiempo y dinero"
      />
      <Benefit
        image={require('./speed.svg')}
        title="Respuesta rápida a los cambios del entorno."
      />
      <Benefit
        image={require('./strategy.svg')}
        title="Aplicación de talento y recursos en áreas claves"
      />
      <Benefit
        image={require('./blueprint.svg')}
        title="Aumento en la flexibilidad de su empresa"
      />
      <Benefit
        image={require('./piggy-bank.svg')}
        title="Disminución de sus costos fijos."
      />
      <Benefit
        image={require('./power-hit.svg')}
        title="Incremento en los puntos fuertes de su empresa"
      />
      <Benefit
        image={require('./document-flow.svg')}
        title="Facturas completamente deducibles de impuestos"
      />
      <Benefit
        image={require('./trusted-security.svg')}
        title="ADDIST asume la responsabilidad patronal y legal de los empleados ante las autoridades laborales como IMSS."
      />
    </div>
  </div>
);

export default Benefits;
