import React from 'react';
import {Link} from 'react-router';
import styles from './TopBar.scss';
import FaBars from 'react-icons/lib/fa/bars';
import DesktopMenu from '../DesktopMenu';

const TopBar = ({ onToggle }) => (
  <div className={styles.topBar}>
    <Link to="/">
      <img className={styles.logo} src={require('./logo.svg')} alt="BMG Tech" />
    </Link>

    <DesktopMenu />


    <button className={styles.toggleButton} onClick={onToggle}>
      <FaBars height="2em" width="2em" />
    </button>
  </div>
);

TopBar.propTypes = {
  onToggle: React.PropTypes.func.isRequired
};

export default TopBar;
