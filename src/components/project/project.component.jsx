import React from 'react';

import Icon from '../icon/icon.component';

import './project.styles.scss';

const Project = () => (
  <div className='project'>
    <div className='row'>
      <div className='col-1-of-2'>
        <h2 className='project-heading'>Personal Portfolio</h2>
        <Icon 
          type='project'
          url='http://brandonzhoucharles.com'
          icon={['fas', 'desktop']}
          size='1x'
          title='Live Preview'
          color='primary'
        />
        <Icon 
          type='project'
          url='https://github.com/btzc/personal-project'
          icon={['fas', 'code-branch']}
          size='1x'
          title='Source Code'
          color='primary'
        />
        <div className='technologies-container'>
          <h2 className='project-heading'>Technologies Used</h2>
          <ul className='technologies'>
            <li className='technology-container'>
              <Icon 
                icon={['fas', 'dot-circle']}
                size='xs'
                color='primary'
              />
              <span className='technology'>ReactJS</span>
            </li>
            <li className='technology-container'>
              <Icon 
                icon={['fas', 'dot-circle']}
                size='xs'
                color='primary'
              />
              <span className='technology'>ReactJS</span>
            </li>
            <li className='technology-container'>
              <Icon 
                icon={['fas', 'dot-circle']}
                size='xs'
                color='primary'
              />
              <span className='technology'>ReactJS</span>
            </li>
            <li className='technology-container'>
              <Icon 
                icon={['fas', 'dot-circle']}
                size='xs'
                color='primary'
              />
              <span className='technology'>ReactJS</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-1-of-2'>
        <div>
          <h2 className='project-heading'>Project</h2>
          <p>Some text</p>
        </div>
        <div>
          <h2 className='project-heading'>Project Difficulties</h2>
          <p>Some text</p>
        </div>
        <div>
          <h2 className='project-heading'>My Solution</h2>
          <p>Some text</p>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
