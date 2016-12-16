import React from 'react';
import styles from './Benefit.scss';

const Benefit = ({ image, title }) => (
  <div className={styles.value}>
    <img className={styles.image} src={image} alt={title} />
    <h4 className={styles.title}>{title}</h4>
  </div>
);

Benefit.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default Benefit;
