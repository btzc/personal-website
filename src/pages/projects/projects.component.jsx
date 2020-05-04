import React from 'react';

import './projects.styles.scss';

const Projects = () => (
  <div className='projects' id='projects'>
    <h1>Projects</h1>
    <div className='row'>
      <div className='col-1-of-2'>
        <h1>Personal Portfolio</h1>
        <div className='link-container'>
          <span>Live Preview</span>
          <span>GitHub</span>
        </div>
        <div className='technologies-container'>
          <h2>Technologies Used</h2>
          <ul>
            <li>ReactJS</li>
            <li>SCSS</li>
            <li>HTML</li>
            <li>GCP</li>
          </ul>
        </div>
      </div>
      <div className='col-1-of-2'>
        <div>
          <h2>Project</h2>
          <p>Some text</p>
        </div>
        <div>
          <h2>Project Difficulties</h2>
          <p>Some text</p>
        </div>
        <div>
          <h2>My Solution</h2>
          <p>Some text</p>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
