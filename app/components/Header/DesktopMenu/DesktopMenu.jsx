import React from 'react';
import {Link} from 'react-router';
import styles from './DesktopMenu.scss';

const MobileMenu = ({ onClick }) => (
  <nav className={styles.menu}>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/about"
      onClick={onClick}
    >
      About us
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/apps"
      onClick={onClick}
    >
      Apps
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/sites"
      onClick={onClick}
    >
      Sites
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/work"
      onClick={onClick}
    >
      How we work
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/contact"
      onClick={onClick}
    >
      Contact us
    </Link>
  </nav>
);

MobileMenu.propTypes = {
  onClick: React.PropTypes.func
};

export default MobileMenu;
