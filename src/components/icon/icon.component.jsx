import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import './icon.styles.scss';

const Icon = ({type, url, icon, size, title, color, animated}) => {
  library.add( fab, fas );

  return (
    <div className='icon'>
      {
        url ? (
          <a href={url} className={`${ type === 'social' ? 'social-btn' : 'project-btn'} ${ color === 'primary' ? 'orange' : 'white'} ${ animated  ? 'animated' : ''}`}>
            <FontAwesomeIcon className='action' icon={icon} size={size} />
            <span>{title}</span>
          </a>
        ) : (
          <FontAwesomeIcon className={`circle ${ color === 'primary' ? 'orange' : 'white'}`} icon={icon} size={size} />
        )
      }

    </div>
  );
}

export default Icon;
