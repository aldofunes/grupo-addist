import React from 'react';
import { Link } from 'react-router';
import FaHome from 'react-icons/lib/fa/home';
import FaInfo from 'react-icons/lib/fa/info';
import FaServer from 'react-icons/lib/fa/server';
import MdPeople from 'react-icons/lib/md/people';
import MdBusiness from 'react-icons/lib/md/business';
import FaInbox from 'react-icons/lib/fa/inbox';
import styles from './MobileMenu.scss';

const MobileMenu = ({ onClick }) => (
  <nav className={styles.menu}>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/"
      onClick={onClick}
    >
      <FaHome /> Inicio
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/nosotros"
      onClick={onClick}
    >
      <FaInfo /> Nosotros
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/servicios"
      onClick={onClick}
    >
      <FaServer /> Servicios
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/empleados"
      onClick={onClick}
    >
      <MdPeople /> Empleados
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/empresas"
      onClick={onClick}
    >
      <MdBusiness /> Empresas
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/contacto"
      onClick={onClick}
    >
      <FaInbox /> Contacto
    </Link>
  </nav>
);

MobileMenu.propTypes = {
  onClick: React.PropTypes.func,
};

export default MobileMenu;
