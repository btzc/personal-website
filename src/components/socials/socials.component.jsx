import React from 'react';

import Icon from '../../components/icon/icon.component';

import './socials.styles.scss';

const Socials = ({ color, animated }) => {


  return (
    <div className='socials'>
      <Icon
        type='social'
        url='https://www.linkedin.com/in/brandon-zhou-charles-751609120'
        icon={['fab', 'linkedin-in']}
        size='2x'
        title='Linkedin'
        color={color}
        animated={animated}
      />
      <Icon 
        type='social'
        url='https://github.com/btzc'
        icon={['fab', 'github']}
        size='2x'
        title='Github'
        color={color}
        animated={animated}
      />
      <Icon
        type='social' 
        url='mailto:brandonzhoucharles@gmail.com'
        icon={['fas', 'at']}
        size='2x'
        title='Email'
        color={color}
        animated={animated}
      />
    </div>
  );
}

export default Socials;
