import React, { Component } from 'react';

import { Greeting, CatchPhrase } from '../data/Hero';
// const particleOptions = JSON.parse(ParticlesConfig);

class Hero extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      greeting: Greeting
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this));

    this.helloTimer = setInterval(
      () => this.tick(),
      600
    );
  }

  componentWillUnmount() {
    clearInterval(this.helloTimer);
  }

  onScroll(e) {
    this.setState({ faded: window.scrollY > (window.innerHeight / 4) });
  }

  tick() {
    const newGreeting = this.state.greeting === Greeting ? `${Greeting.trim()}_` : Greeting;
    
    this.setState({
      greeting: newGreeting
    });
  }

  render() {
    const fadedClass = this.state.faded ? 'hero--faded' : '';
    const textClass = this.state.faded ? 'is-primary' : 'is-light';

    return (
      <section className="section__hero">

        <div className={`hero-fixed ${fadedClass}`}>
          <div className="hero-greeting">
            <h1 className="hero-greeting__text is-white">{this.state.greeting}</h1>
          </div>
        </div>

        <div className="container hero-continue">
          <p className={`hero-continue__text is-bold ${textClass}`}>{CatchPhrase}</p>
          <i className="hero-continue__icon icon ion-ios-arrow-dropdown-circle is-white"></i>
        </div>

      </section>
    );
  }
}

export default Hero;