import React from 'react';
import ProjectList from '../components/project-list/project-list.jsx';

export default React.createClass({
  render() {
    return (
      <ProjectList params={{featured: true}} />
    );
  }
});