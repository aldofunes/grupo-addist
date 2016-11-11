import React from 'react';
import styles from './Header.scss';
import TopBar from './TopBar';
import MobileMenu from './MobileMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div className={styles.header}>

        <TopBar onToggle={this.toggle} />
        {isOpen ? (
          <MobileMenu onClick={this.toggle} />
        ) : ''}


      </div>
    );
  }
}

export default Header;
