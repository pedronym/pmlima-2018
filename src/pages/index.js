import React, { Component } from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Hero from '../components/Hero';

class IndexPage extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="main">
        <Header />
        <Hero />
      </div>
    );
  }
}

export default IndexPage;
