import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="section__about section--padded section--bordered">

        <div className="profile-image">
          <img src="/assets/images/profile2.jpg" alt="My stupid face" />
        </div>

        <div className="about-content mt-2 is-padded">
          <p className="is-size-4 is-primary is-bold">What have I been up to?</p>
          <small className="is-size-6 is-bold is-muted">And the hell did I get here?</small>
        </div>

        <div className="about-text mt-3 is-padded">

          <p className="is-size-5 is-white mb-2">
            I grew around computers so it wasn’t that surprising when I started putting together some awful websites using framesets and tables when I was 16 years old.
          </p>

          <p className="is-size-5 is-primary is-bold mb-2">
            I was doing it for fun!
          </p>

          <p className="is-size-5 is-white mb-2">
            After I finished highschool I realized that I wanted to study something related to ‘making cool stuff appear on screen’. 
          </p>

          <p className="is-size-5 is-primary is-bold mb-2">
            I joined college to study Digital Arts in 2003.
          </p>

          <p className="is-size-5 is-white mb-2">
            At the time I was already doing freelance work and, after finishing the first year of college, I began to feel that I wasn’t progressing my technical skills as much as I would like so I made the decision to look for something else.
          </p>

          <p className="is-size-5 is-primary is-bold mb-2">
            I joined a Graphic and Multimedia Productions course in 2005.
          </p>

          <p className="is-size-5 is-white mb-3">
            In the last months of the course (which lasted a year) I was sent to an internship in a design office. 
            After two months there I was invited to join their team and I never stopped going until today. 
          </p>

          <p className="is-size-6 is-primary is-bold mb-2">
            I’ve been working on digital products for more than 10 years and constantly adapting to the tools that the market dictates are the best for the task at hand.
          </p>

          <p className="is-size-6 is-bold">
            Here are some of the great companies I had the pleasure to work for
          </p>
          
          <i className="about-continue__icon icon ion-chevron-down"></i>
        </div>
      </div>
    );
  }
}

export default About;