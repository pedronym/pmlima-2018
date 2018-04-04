import React, { Component } from 'react';
import Link from 'gatsby-link';

import Jobs from './../components/Jobs';

class IndexPage extends Component {
  render() {
    return (
      <div>
        {this.props.data}
        <h1 className='title is-1'>Hello</h1>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <a className='button'>Teste</a>

        <Jobs />
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query GetAllJobs {
    allJobsJson {
      edges {
        node {
          name
          title
          description
          date
          link
       }
     }
   }
 }
`;
