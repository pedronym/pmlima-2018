import React, { Component } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

class IndexPage extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default IndexPage;
