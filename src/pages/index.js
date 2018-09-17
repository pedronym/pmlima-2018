// React Imports
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticlesConfig from '../data/Particles.json';

// Site Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import About from '../components/About';
import Jobs from '../components/Jobs';

class IndexPage extends Component {
  render() {
    return (

      <div className="main">
        <Header />
        {/* <Particles params={ParticlesConfig} style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          zIndex: 1
        }} /> */}
        <Hero />
        <Intro />
        <About />
        <Jobs />
      </div>

    );
  }
}

export default IndexPage;
