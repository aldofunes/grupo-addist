import React from 'react';
import {Link} from 'react-router';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <Link to="privacidad">Política de privacidad</Link>
    </div>

    <div className={styles.copyright}>
      © {new Date().getFullYear()} Grupo ADDIST S. de R. L. de C. V.
    </div>
  </footer>
);

export default Footer;
