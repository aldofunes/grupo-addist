import React from 'react';
import styles from './App.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CookieConsent from '../../components/CookieConsent';

class App extends React.Component {
  componentDidMount() {
    // Initiate GoSquared analytics without tracking pageview
    _gs(process.env.GOSQUARED, false);

    // Set to true to track localhost (useful for QA)
    _gs('set', 'trackLocal', true);
  }

  render() {
    const { children } = this.props;


    return (
      <div className={styles.app}>
        <Header />
        <div className={styles.main}>{children}</div>
        <Footer />

        <CookieConsent />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default App;
