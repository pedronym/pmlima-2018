import React from 'react';
import classNames from 'classnames';

const JobsItem = props => {
  const { name, title, description, date, link, thumb } = props.job;

  const classes = classNames('job-item is-padded', {
    'job-item--alt': !(props.idx & 1)
  });
 
  return (
    <div className={classes}>

      {thumb &&
        <div className="job-item__thumb">
          <img alt={name} src={thumb} />
        </div>
      }
      
      <p className="job-item__name mt-1 mb-1">{name}</p>

      <p className="job-item__title">{title}</p>
      <p className="job-item__date">{date}</p>
      
      <p className="job-item__description mt-2">{description}</p>
     
    </div>
  );
};

export default JobsItem;