import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import './socials.styles.scss';

const Socials = () => {
  library.add( fab, fas );

  return (
    <div className='socials'>
      <a href='https://www.linkedin.com/in/brandon-zhou-charles-751609120' className='social-btn'>
        <FontAwesomeIcon className='icon' icon={['fab', 'linkedin-in']} size='2x' />
        <span>Linkedin</span>
      </a>
      <a href='https://github.com/btzc' className='social-btn'>
        <FontAwesomeIcon className='icon' icon={['fab', 'github']} size='2x' />
        <span>Github</span>
      </a>
      <a href='mailto:brandonzhoucharles@gmail.com' className='social-btn'>
        <FontAwesomeIcon className='icon' icon={['fas', 'at']} size='2x' />
        <span>Email</span>
      </a>
    </div>
  );
}

export default Socials;
