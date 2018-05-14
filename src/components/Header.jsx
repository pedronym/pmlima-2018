import React, { Component } from 'react';

/* Icons */
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';

/* Data */
import { Navigation } from '../data/Header';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nav: Navigation
    };
  }

  renderNavigation() {
    const { nav } = this.state;

    return nav.map((item, idx) => {
      return (
        <a className="nav__item" key={idx}>
          <FontAwesomeIcon icon={faLinkedin} />
          {item.title}
        </a>
      );
    });
  }

  render() {
    return (
      <header className="header">
        <nav className="nav">
          {this.renderNavigation()}
        </nav>
      </header>
    );
  }
}

export default Header;
