import React, { Component } from 'react';

// Load Components
import { Button } from './layout/Button';
import { Map } from './layout/Map';

class Intro extends Component {
  render() {
    const highlightStyle = 'is-primary is-bold';
    return (
      <section className="intro">
        <Map />
        <div className="container intro-container">

          <div className="pad-x">

            <div className="intro-text column is-12">
              <h3 className="intro-heading">
                My name is 
                <span className={highlightStyle}> Pedro Lima</span> and I'm a 
                <span className={highlightStyle}> Front-End Developer</span> and 
                <span className={highlightStyle}> UX/UI Designer</span> currently working from 
                <span className={highlightStyle}> Porto</span>, Portugal.
              </h3>
              
              <p className="t-base mt-2">
                At the moment I'm working as a 
                <span className={highlightStyle}> Senior Front-End Developer</span> @ 
                <span className={highlightStyle}> 7egend</span> developing web applications and 
                e-commerce solutions for a large range of customers mainly using 
                <span className={highlightStyle}> React JS</span>.
              </p>

              <p className="t-base mt-2">
                I also do the occasional 
                <span className={highlightStyle}> UX/UI</span> tutoring session for companies looking 
                to improve the usability of their products.
              </p>
            </div>

            <div className="intro-downloads column is-12 mt-2">
              <a className="intro-downloads__btn t-base">
                <span className="">Download my CV</span>
                <i className="icon ion-ios-arrow-dropright-circle"></i>
              </a>

              <p className="t-small is-bold mt-1 is-muted">PDF File - Last Updated on: January 2018</p>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Intro;