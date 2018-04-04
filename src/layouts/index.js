import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hello from Portugal!"
      meta={[
        { name: 'description', content: 'Front-End Developer - Pedro Lima - Personal Website' },
        { name: 'keywords', content: 'front-end, javascript, react, sass' },
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
