import React from 'react';
import './App.css';

import Home from './pages/home/home.component';
import Projects from './pages/projects/projects.component';
import Work from './pages/work/work.component';
import Contact from './pages/contact/contact.component';

import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
        <Projects />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
