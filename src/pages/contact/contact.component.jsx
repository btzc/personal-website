import React from 'react';

import Socials from '../../components/socials/socials.component';

import './contact.styles.scss';

const Contact = () => (
  <div className='contact' id='contact'>
    <h1 className='heading'>Thanks for checking me out!</h1>
    <p>Want to get to know me more? That's great! Feel free to reach out, even if it's just for a cup of coffee (but I'm expecting you to buy).</p>
    <Socials 
      color='white'
      animated='true'
    />
    <p>P.S. If you don't like the colour orange, I'm so sorry</p>
  </div>
);

export default Contact;
