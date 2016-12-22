import React, { PropTypes } from 'react';
import styles from './Input.scss';

const Input = ({ id, type, label, placeholder, valid, validationMessage, value, onChange }) => {
  const renderError = () => {
    if (valid) {
      return <span>{validationMessage}</span>;
    }

    return '';
  };

  if (type === 'textArea') {
    return (
      <div className={styles.inputGroup}>
        {label ? <label htmlFor={id} className={styles.label}>{label}</label> : ''}
        {renderError()}
        <textarea
          placeholder={placeholder}
          id={id}
          rows="5"
          className={styles.input}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }

  return (
    <div className={styles.inputGroup}>
      {label ? <label htmlFor={id} className={styles.label}>{label}</label> : ''}
      {renderError()}
      <input
        placeholder={placeholder}
        id={id} className={styles.input}
        type={type} value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'date', 'tel', 'textArea']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

React.defaultProps = {
  type: 'text',
  label: '',
  validationMessage: 'Invalid input',
};

export default Input;
