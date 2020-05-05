import React from 'react';

import Socials from '../../components/socials/socials.component';

import './home.styles.scss';

const Home = () => (
  <div className='home' id='home'>
    <div className='header-container'>
      <h1 className='heading'>
        <span className='heading-main'>
          <span className='emphasis'>Software</span> Engineer
        </span>
        <span className='heading-sub'>
          Passionate about adventures, clean code, and coffee
        </span>
      </h1>
      <Socials 
        color='primary'
        animated='true'
      />
    </div>
  </div>
);

export default Home;
