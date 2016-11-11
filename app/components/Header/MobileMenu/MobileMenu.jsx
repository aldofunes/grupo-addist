import React from 'react';
import {Link} from 'react-router';
import FaHome from 'react-icons/lib/fa/home';
import FaInfo from 'react-icons/lib/fa/info';
import FaMobile from 'react-icons/lib/fa/mobile';
import FaDesktop from 'react-icons/lib/fa/desktop';
import FaBriefcase from 'react-icons/lib/fa/briefcase';
import FaInbox from 'react-icons/lib/fa/inbox';
import styles from './MobileMenu.scss';

const MobileMenu = ({onClick}) => (
  <nav className={styles.menu}>
    <Link
      className={styles.menuItem}
      to="/"
      onClick={onClick}
    >
      <FaHome /> Home
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/about"
      onClick={onClick}
    >
      <FaInfo /> About us
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/apps"
      onClick={onClick}
    >
      <FaMobile /> Apps
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/sites"
      onClick={onClick}
    >
      <FaDesktop /> Sites
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/work"
      onClick={onClick}
    >
      <FaBriefcase /> How we work
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/contact"
      onClick={onClick}
    >
      <FaInbox /> Contact us
    </Link>
  </nav>
);

MobileMenu.propTypes = {
  onClick: React.PropTypes.func
};

export default MobileMenu;
