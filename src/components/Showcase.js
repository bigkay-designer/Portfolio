import React from 'react';
import './css/showcase.css';
function Showcase() {
  return (
    <div className="showCase">
      <div className="showcase__overlay"></div>
      <div className="showCase__container">
        <p>
          I'm a Full-Stack web developer currently based in London, United
          Kingdom. hit me up and let's create something special together!
        </p>
        <div className="btn__div">
          {/* <Link  to="projects" smooth={true} duration={1000} offset={-120}> <button>view projects</button> </Link> */}
          <button className="btn__resume">
            {' '}
            <a
              href="https://drive.google.com/file/d/169EBjqF3a43-fL4z5kQdQj22ZQfcFRxw/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              view Resume{' '}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
