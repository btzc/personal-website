import React from 'react';

import './navbar.styles.scss';

const Navbar = () => {
  const toggleActive = (e) => {
    let active = document.querySelector('.active');
    active.classList.remove('active');
    e.target.classList.add('active');
  }
  

  return (
    <div className='navbar'>
      <div className='logo'>
        <span className='emphasis'>Brandon</span> Zhou-Charles
      </div>
      <a className="active" href="#home" onClick={(event) => {toggleActive(event)}}>Home</a>
      <a href="#projects" onClick={(event) => {toggleActive(event)}}>Projects</a>
      <a href="#work" onClick={(event) => {toggleActive(event)}}>Work</a>
      <a href="#contact" onClick={(event) => {toggleActive(event)}}>Contact</a>
    </div>
  );
}
export default Navbar;
