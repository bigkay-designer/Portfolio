import React from 'react';
import './css/showcase.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MyTech from './MyTech';
function Showcase() {
  const resumeLink =
    'https://drive.google.com/file/d/11cz5QiN3gxxnQfxzTReGNWZGSV8T-gAV/view?usp=sharing';
  return (
    <div className="showCase">
      <div className="showcase__overlay"></div>
      <div className="showCase__container">
        <h2 className="title">Khalid Ibrahim</h2>
        <h4 className="role">Full Stack Software Engineer</h4>
        <p className="intro">
          I build cutting-edge software solutions that drive business success
          and innovation. With a passion for solving challenges, I turn complex
          ideas into reality. Let’s collaborate to create something exceptional.
        </p>
        <div className="btn__div">
          {/* <Link  to="projects" smooth={true} duration={1000} offset={-120}> <button>view projects</button> </Link> */}
          <Link to={resumeLink} target="_blank">
            <Button className="btn__resume">view Resume </Button>
          </Link>
        </div>
      </div>
      <MyTech />
    </div>
  );
}

export default Showcase;
