import React, { Component } from 'react';
import Particles from 'react-particles-js';

import ParticlesConfig from '../data/Particles.json';

// const particleOptions = JSON.parse(ParticlesConfig);

class Hero extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <section className="hero is-medium is-dark is-bold">
        <Particles params={ParticlesConfig} style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 0
        }} />

        <div className="hero-body container">

          <h1 className="intro-huge title">Hello</h1>

          <h2 className="is-size-4">My name is <strong>Pedro Lima</strong> and Im a <strong>Front-End Developer</strong> and <strong>UX/UI Designer </strong>currently working from <strong>Porto</strong>, Portugal.</h2>

          <br />

          <p className="is-size-5">At the moment Im working as a Senior Front-End Developer at <a className="alt" href="//www.7egend.cr">7egend</a> developing web applications and e-commerce platforms for a large range of customers mainly using <a className="alt" href="https://www.reactjs.org" title="React Js" target="_blank" rel="noopener noreferrer">React JS</a>. I also do occasional <span className="alt">UX/UI tutoring</span> sessions for companies looking to improve the usability of their products.</p>

          <p className="is-size-5 has-margin-top-1x">You can <strong className="alt">download my CV</strong> below or <strong className="alt">scroll down</strong> if you want to see my detailed profile.</p>

          <div className="intro-downloads has-text-left">
            <a className="button is-medium is-rounded is-fullwidth cv-button" href="pdf/Pedro_Lima_CV_January2018_EN.pdf">
              Download CV
            </a>

            <div><small>PDF File - Last update: January 2018</small></div>
          </div>

        </div>
      </section>
    );
  }
}



export default Hero;