import React from 'react';
import { Link } from 'react-router';
import styles from './DesktopMenu.scss';

const MobileMenu = ({ onClick }) => (
  <nav className={styles.menu}>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/nosotros"
      onClick={onClick}
    >
      Nosotros
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/servicios"
      onClick={onClick}
    >
      Servicios
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/empleados"
      onClick={onClick}
    >
      Empleados
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/empresas"
      onClick={onClick}
    >
      Empresas
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/contacto"
      onClick={onClick}
    >
      Contacto
    </Link>
  </nav>
);

MobileMenu.propTypes = {
  onClick: React.PropTypes.func,
};

export default MobileMenu;
