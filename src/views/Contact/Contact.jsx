import React from 'react';
import styles from './Contact.scss';
import Banner from './Banner';
import ContactDetails from './ContactDetails';
import ContactForm from '../../components/ContactForm';

const Contact = () => (
  <div>
    <Banner />
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Pónte en contacto con nosotros</h3>
      </div>
      <div className={styles.contactDetails}>
        <ContactDetails />
      </div>
      <div className={styles.contactForm}>
        <ContactForm />
      </div>
    </div>
  </div>
);

export default Contact;
