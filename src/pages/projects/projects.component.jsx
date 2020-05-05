import React from 'react';

import Project from '../../components/project/project.component';

import './projects.styles.scss';

const Projects = () => (
  <div className='projects' id='projects'>
    <h1 className='section-heading'>Projects</h1>
    <Project />
    <hr />
    <Project />
    <hr />
    <Project />
  </div>
);

export default Projects;
