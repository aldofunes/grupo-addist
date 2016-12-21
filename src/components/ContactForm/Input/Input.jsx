import React from 'react';
import uuid from 'uuid';
import styles from './Input.scss';

const Input = ({ type, label, value, onChange }) => {
  const id = uuid.v4();
  if (type === 'textArea') {
    return (
      <div className={styles.inputGroup}>
        {label ? (
          <label htmlFor={id} className={styles.label}>{label}</label>
        ) : ''}
        <textarea id={id} rows="5" className={styles.input} value={value} onChange={onChange} />
      </div>
    );
  }

  return (
    <div className={styles.inputGroup}>
      {label ? (
        <label htmlFor={id} className={styles.label}>{label}</label>
      ) : ''}
      <input id={id} className={styles.input} type={type} value={value} onChange={onChange} />
    </div>
  );
};

Input.propTypes = {
  type: React.PropTypes.oneOf(['text', 'email', 'password', 'textArea']),
  label: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

React.defaultProps = {
  type: 'text',
  label: '',
};

export default Input;
