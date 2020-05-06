import React, { useEffect } from 'react';

import './navbar.styles.scss';

const Navbar = ({ offsetTop }) => {
  useEffect(() => {
    const projects = document.querySelector('#projects');
    const contact = document.querySelector('#contact');

    if (offsetTop < (projects.offsetTop * 0.50)) {
      const homeLink = document.querySelector('#home-link');
      toggleActive(homeLink);
    } else if ( offsetTop >= (projects.offsetTop * 0.50) && offsetTop < (contact.offsetTop * 0.80)) {
      const projectsLink = document.querySelector('#projects-link');
      toggleActive(projectsLink);
    } else {
      const contactLink = document.querySelector('#contact-link');
      toggleActive(contactLink);
    }
  });

  const toggleActive = (e) => {
    let active = document.querySelector('.active');
    active.classList.remove('active');
    e.classList.add('active');
  }

  const handleClick = (e) => {
    const section = document.querySelector(`#${e.innerText.toLowerCase()}`);
    window.scrollTo({
      left: 0,
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
  

  return (
    <div className='navbar'>
      <div className='logo'>
        <span className='emphasis'>Brandon</span> Zhou-Charles
      </div>
      <div id='home-link' className="link active" onClick={(event) => {handleClick(event.target)}}>Home</div>
      <div id='projects-link' className='link' onClick={(event) => {handleClick(event.target)}}>Projects</div>
      <div id='contact-link' className='link' onClick={(event) => {handleClick(event.target)}}>Contact</div>
    </div>
  );
}
export default Navbar;
