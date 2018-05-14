import React, { Component } from 'react';
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

    return nav.map((el, idx) => {
      return (
        <p key={idx}>{el.title}</p>
      );
    });
  }

  render() {
    return (
      <header className="header">
        {this.renderNavigation()}
      </header>
    );
  }
}

export default Header;
