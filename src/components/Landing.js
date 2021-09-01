import React from 'react';
import About from './About';
import Projects from './Projects';
import './css/landing.css';
function Landing() {
  return (
    <div className="landing">
      <Projects />
      <About />
    </div>
  );
}

export default Landing;
