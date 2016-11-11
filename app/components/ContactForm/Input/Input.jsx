import React from 'react';
import styles from './Input.scss';

const Input = ({ type, label, value, onChange }) => {
  if (type === 'textArea') {
    return (
      <div className={styles.inputGroup}>
        {label ? (
          <label className={styles.label}>{label}</label>
        ) : ''}
        <textarea rows="5" className={styles.input} value={value} onChange={onChange} />
      </div>
    );
  }

  return (
    <div className={styles.inputGroup}>
      {label ? (
        <label className={styles.label}>{label}</label>
      ) : ''}
      <input className={styles.input} type={type} value={value} onChange={onChange} />
    </div>
  );
};

Input.propTypes = {
  type: React.PropTypes.oneOf(['text', 'email', 'password', 'textArea']),
  label: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  className: React.PropTypes.string
};

React.defaultProps = {
  type: 'text',
  label: '',
};

export default Input;