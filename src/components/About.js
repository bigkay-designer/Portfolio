import React from 'react';
import {Link} from 'react-scroll';
import {HiTerminal} from 'react-icons/hi';
import {GoDeviceMobile} from 'react-icons/go';
import {FaAws, FaDocker} from 'react-icons/fa';
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiCss3,
  SiSass,
  SiFirebase,
  SiNginx,
  SiMui,
  SiLinux,
  SiGithub,
  SiDigitalocean,
  SiVisualstudiocode,
  SiFigma,
  SiSketch,
  SiAdobexd,
  SiAdobephotoshop,
  SiAffinitydesigner,
  SiMicrosoftedge,
  SiMaterialdesign,
} from 'react-icons/si';
import './css/main.css';
import './css/about.css';
import './css/MyTech.css';

function About() {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <div className="about__title">
          <h1>About me</h1>
        </div>
        <div className="about__content">
          <Link to="projects" smooth={true} duration={1000} offset={-120}>
            projects
          </Link>
          <p>
            As a Full Stack Software Engineer with extensive experience across
            both startups and large enterprises, I specialise in turning complex
            business challenges into efficient, scalable technology solutions.
            From custom software development to API integration and process
            automation (RPA), I design systems that transform digital landscapes
            and drive measurable business growth.
          </p>
          <p>
            Proficient in React, Node.js, JavaScript, and Python, I bring a
            versatile skill set that spans both front-end and back-end
            development. My experience in agile environments allows me to
            deliver high-impact solutions that are tailored to each client's
            unique needs. Whether you're optimising workflows or building
            bespoke software from scratch, my focus is always on delivering
            value, efficiency, and long-term success through technology.
          </p>
        </div>

        <div className="about__skills__showCase">
          <div className="about__design">
            <div className="about__design__logo">{/* <FaPencilRuler /> */}</div>
            <div className="about__design__title">
              <h1>Designer</h1>
              <p>
                I value simple content structure, a clean design pattern, and
                thoughtful interactions.
              </p>
            </div>
            <div className="about__design__content">
              <h1>Things i enjoy designing</h1>
              <ul>
                <li>
                  <SiAffinitydesigner className="ux" />
                  <span>UX, UI</span>
                </li>
                <li>
                  <SiMicrosoftedge className="internet" /> <span>WEB</span>
                </li>
                <li>
                  <GoDeviceMobile className="mobile" /> <span>MOBILE</span>
                </li>
                <li>
                  <SiMaterialdesign className="logo" /> <span>LOGOS</span>
                </li>
              </ul>
            </div>
            <div className="about__design__tools">
              <h1>design tools</h1>
              <ul>
                <li>
                  <SiFigma className="figma" /> <span>Figma</span>
                </li>
                <li>
                  <SiSketch className="sketch" /> <span>sketch</span>
                </li>
                <li>
                  <SiAdobexd className="adobe" /> <span>adobe xd</span>
                </li>
                <li>
                  <SiAdobephotoshop className="photoshop" />
                  <span>photoshop</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="about__code">
            <div className="about__design__logo">{/* <FaFileCode /> */}</div>
            <div className="about__design__title">
              <h1>full-stack developer</h1>
              <p>
                I like to code from scratch and enjoy bringing ideas to life in
                the browser.
              </p>
            </div>
            <div className="about__design__content">
              <h1>dev tools</h1>
              <ul>
                <li>
                  <SiHtml5 className="html" />
                  <span>html</span>
                </li>
                <li>
                  <SiCss3 className="css" />
                  <span>css</span>
                </li>
                <li>
                  <SiSass className="sass" />
                  <span>sass</span>
                </li>
                <li>
                  <SiMui className="material" />
                  <span>material-ui</span>
                </li>
                <li>
                  <SiJavascript className="js" />
                  <span>javaScript</span>
                </li>
                <li>
                  <SiReact className="react" />
                  <span>react</span>
                </li>
                <li>
                  <SiNodedotjs className="nodejs" />
                  <span>nodeJs</span>
                </li>
                <li>
                  <SiNginx className="ngx" />
                  <span>nginx</span>
                </li>
              </ul>
            </div>
            <div className="about__design__tools">
              <ul>
                <li>
                  <SiVisualstudiocode className="vs" />
                  <span>Visual Studio Code</span>
                </li>
                <li>
                  <FaAws className="aws" />
                  <span>AWS</span>
                </li>
                <li>
                  <HiTerminal className="terminal" />
                  <span>terminal</span>
                </li>
                <li>
                  <SiLinux className="linux" />
                  <span>linux</span>
                </li>
                <li>
                  <SiGithub className="github" />
                  <span>github</span>
                </li>
                <li>
                  <FaDocker className="docker" />
                  <span>docker</span>
                </li>
                <li>
                  <SiFirebase className="fb" />
                  <span>firebase</span>
                </li>
                <li>
                  <SiDigitalocean className="dg" /> <span>digital Ocean</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
