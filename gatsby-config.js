const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Hello from Portugal!',
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'jobs',
      path: path.join(__dirname, '/src/data/jobs.json'),
    },
  }, 'gatsby-plugin-react-helmet', 'gatsby-plugin-sass', 'gatsby-transformer-json']
};
