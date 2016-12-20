import React from 'react';
import styles from './Value.scss';

const Value = ({ image, title, body }) => (
  <div className={styles.value}>
    <img className={styles.image} src={image} alt={title} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.body}>{body}</p>
  </div>
);

Value.propTypes = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired
};

export default Value;
