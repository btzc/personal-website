import React, { useEffect, useState } from 'react';
import './App.css';

import Home from './pages/home/home.component';
import Projects from './pages/projects/projects.component';
import Contact from './pages/contact/contact.component';

import Navbar from './components/navbar/navbar.component';

function App() {
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      handleScroll();
    }
  });

  const handleScroll = () => {
    const offsetTop = window.scrollY;
    setOffsetTop(offsetTop);
  }

  return (
    <div className="App">
      <Navbar offsetTop={offsetTop} />
      <div className='content'>
        <Home />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
