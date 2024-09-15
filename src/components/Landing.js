import React from 'react';
import About from './About';
import Projects from './Projects';
import './css/landing.css';
import Showcase from './Showcase';
function Landing() {
  return (
    <div className="landing">
      <div className="landing__container">
        <div className="landing__showcase">
          <Showcase />
        </div>
        <div className="landing__other">
          <About />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default Landing;
