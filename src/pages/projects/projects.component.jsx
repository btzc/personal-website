import React from 'react';

import Project from '../../components/project/project.component';

import DATA from './projects.data.jsx';
import './projects.styles.scss';

const Projects = () => (
  <div className='projects' id='projects'>
    <h1 className='section-heading'>Projects</h1>
    {
      DATA.projects.map(({id, technologies, project, description, difficulties, solution, live=null, source=null, img}, i) => {
        if (i === DATA.projects.length-1) {
          return (
            <React.Fragment key={id}>
              <Project 
                technologies={technologies} 
                project={project} 
                description={description} 
                difficulties={difficulties} 
                solution={solution} 
                live={live} 
                source={source} 
              />
            </React.Fragment>
          )
        }

        return (
          <React.Fragment key={id}>
            <Project 
              technologies={technologies} 
              project={project} 
              description={description} 
              difficulties={difficulties} 
              solution={solution} 
              live={live}
              source={source}
              img={img}
            />
            <hr />        
          </React.Fragment>
        )
      })
    }
  </div>
);

export default Projects;
