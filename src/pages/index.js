import React, { Component } from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';

class IndexPage extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default IndexPage;
