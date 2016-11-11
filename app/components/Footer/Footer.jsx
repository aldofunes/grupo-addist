import React from 'react';
import {Link} from 'react-router';
import styles from './Footer.scss';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square'
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <Link to="privacy">Privacy Policy</Link>
    </div>
    <div className={styles.socialLinks}>
      <a href="https://www.facebook.com/BeamingTech" target="_blank">
        <FaFacebookSquare />
      </a>
      <a href="https://www.linkedin.com/company/beaming-technologies-ltd." target="_blank">
        <FaLinkedinSquare />
      </a>
      <a href="https://twitter.com/BeamingTech" target="_blank">
        <FaTwitterSquare />
      </a>
      <a href="https://plus.google.com/+BmgtechIo" target="_blank">
        <FaGooglePlusSquare />
      </a>
      <a href="mailto:hello@bmgtech.io">
        <FaEnvelopeSquare />
      </a>
    </div>
    <div className={styles.copyright}>
      © {new Date().getFullYear()} Beaming Technologies Ltd.
    </div>
  </footer>
);

export default Footer;
