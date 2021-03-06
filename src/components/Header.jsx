import React, { Component } from 'react';

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
        <a className="nav__item" key={idx} title={item.title}>
          <img className="nav__item-icon" src={`../assets/icons/${item.icon}.svg`} />
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
