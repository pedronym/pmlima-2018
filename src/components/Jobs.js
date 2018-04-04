import React, { Component } from 'react';

class Jobs extends Component {
  render() {
    const post = this.props.data;
    return <div>Jobs {post}</div>;
  }
}

export default Jobs;