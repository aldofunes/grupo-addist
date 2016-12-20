import React from 'react';
import {Link} from 'react-router';
import styles from './CookieConsent.scss';

class CookieConsent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      consentDismissed: false,
    };

    this.dismissConsent = () => {
      let date = new Date();
      date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
      document.cookie = `consent_dismissed=yes; expires=${date.toGMTString()}; path=/`;
      this.setState({ consentDismissed: true });
    };
  }

  componentWillMount() {
    this.setState({
      consentDismissed: document.cookie.indexOf('consent_dismissed=yes') > -1,
    });
  }

  render() {
    const { consentDismissed } = this.state;
    if (consentDismissed) {
      return null;
    }

    const {text, link, linkText, buttonText} = this.props;

    return (
      <div className={styles.container}>
        <p className={styles.text}>{text} &nbsp;<Link to={link}>{linkText}</Link></p>
        <button type="button" className={styles.button} onClick={this.dismissConsent}>
          {buttonText}
        </button>
      </div>
    );
  }
}

CookieConsent.propTypes = {
  text: React.PropTypes.string,
  link: React.PropTypes.string,
  linkText: React.PropTypes.string,
  buttonText: React.PropTypes.string
};

CookieConsent.defaultProps = {
  text: 'This website uses cookies to ensure you get the best experience on our website',
  link: '/privacy',
  linkText: 'More info',
  buttonText: 'Got it!'
};

export default CookieConsent;
