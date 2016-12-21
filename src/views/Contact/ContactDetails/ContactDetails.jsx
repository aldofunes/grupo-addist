import React from 'react';
import styles from './ContactDetails.scss';

const ContactDetails = () => (
  <div className={styles.details}>
    <div className={styles.detail}>
      <img src={require('./email.svg')} alt="Email" className={styles.detail} />
      <a href="mailto:hola@addist.mx">hola@addist.mx</a>
    </div>
    <div className={styles.detail}>
      <img src={require('./phone.svg')} alt="Phone" className={styles.detail} />
      <a href="tel:+525550260260">+52 (55) 5026 0260</a>
      <a href="tel:+525550260261">+52 (55) 5026 0261</a>
    </div>
  </div>
);

export default ContactDetails;
