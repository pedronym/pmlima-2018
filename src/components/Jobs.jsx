import React, { Component } from 'react';
import JobsItem from './jobs/JobsItem';

import JobData from './../data/jobs.json';

class Jobs extends Component {
  render() {
    return (
      <div className="section__jobs">
        <div>
          {JobData.map((job, idx) =>
            <JobsItem key={idx} idx={idx} job={job} />
          )}
        </div>
      </div>
    );
  }
}

export default Jobs;