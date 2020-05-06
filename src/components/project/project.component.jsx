import React from 'react';

import Icon from '../icon/icon.component';

import './project.styles.scss';

const Project = ({technologies, project, description, difficulties, solution, live, source, img=null}) => (
  <div className='project'>
    <div className='row'>
      <div className='col-1-of-2'>
        <h2 className='project-heading'>{project}</h2>
        {
          img ? (<img className='img' src={img} alt='' />) : ''
        }
        {
          live ? (<Icon 
            type='project'
            url={live}
            icon={['fas', 'desktop']}
            size='1x'
            title='Live Preview'
            color='primary'
          />) : ''
        }
        {
          source ? (<Icon 
            type='project'
            url={source}
            icon={['fas', 'code-branch']}
            size='1x'
            title='Source Code'
            color='primary'
          />) : ''
        }
        <div className='technologies-container'>
          <h2 className='project-heading'>Technologies Used</h2>
          <ul className='technologies'>
            {
              technologies.map((technology, i) =>
                <li className='technology-container' key={i}>
                  <Icon 
                    icon={['fas', 'dot-circle']}
                    size='xs'
                    color='primary'
                  />
                  <span className='technology'>{technology}</span>
                </li>
              )
            }
          </ul>
        </div>
      </div>
      <div className='col-2-of-2'>
        <div>
          <h2 className='project-heading'>Project</h2>
          <p>{description}</p>
        </div>
        <div>
          <h2 className='project-heading'>Project Difficulties</h2>
          <p>{difficulties}</p>
        </div>
        <div>
          <h2 className='project-heading'>My Solution</h2>
          <p>{solution}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
