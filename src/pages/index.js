import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1 className='title is-1'>Hello</h1>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <a className='button'>Teste</a>
  </div>
);

export default IndexPage;
