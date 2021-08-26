import React from 'react';
import { Link } from 'react-scroll';
import { HiTerminal } from 'react-icons/hi';
import { GoDeviceMobile } from 'react-icons/go';
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiNodeDotJs,
  SiCss3,
  SiSass,
  SiFirebase,
  SiNginx,
  SiMaterialUi,
  SiLinux,
  SiSublimetext,
  SiGithub,
  SiDigitalocean,
  SiVisualstudio,
  SiFigma,
  SiSketch,
  SiAdobexd,
  SiAdobephotoshop,
  SiAffinitydesigner,
  SiInternetexplorer,
  SiMaterialdesignicons,
} from 'react-icons/si';
import './css/main.css';
import './css/about.css';
import './css/MyTech.css';
function About() {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <div className="about__title">
          <h3>About me</h3>
          <h1>WHO AM I? </h1>
        </div>
        <div className="about__content">
          <p>
            I am full stack developer who designs, builds and customize
            high-performing web applications. I have a passion for building
            responsive and engaging websites that focus on user experience, feel
            free to have a look at some of my{' '}
            <Link to="projects" smooth={true} duration={1000} offset={-120}>
              projects
            </Link>
            .
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
                  <SiInternetexplorer className="internet" /> <span>WEB</span>
                </li>
                <li>
                  <GoDeviceMobile className="mobile" /> <span>MOBILE</span>
                </li>
                <li>
                  <SiMaterialdesignicons className="logo" /> <span>LOGOS</span>
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
                  <SiMaterialUi className="material" />
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
                  <SiNodeDotJs className="nodejs" />
                  <span>nodeJs</span>
                </li>
                <li>
                  <SiNginx className="ngx" />
                  <span>nginx</span>
                </li>
              </ul>
            </div>
            <div className="about__design__tools">
              <h1>dev tools</h1>
              <ul>
                <li>
                  <SiVisualstudio className="vs" />
                  <span>Visual studio</span>
                </li>
                <li>
                  <SiSublimetext className="sublime" />
                  <span>sublime</span>
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
