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
          {/* <Link to="projects" smooth={true} duration={1000} offset={-120}>
            projects
          </Link> */}
          <p>
            As a versatile Full Stack Software Engineer, I have a passion for
            transforming complex challenges into streamlined, scalable
            solutions. With experience in both startups and large enterprises, I
            bring a unique ability to design and implement innovative technology
            that drives measurable growth. My expertise ranges from custom
            software development to API integrations and process automation
            (RPA), ensuring that every project I tackle enhances business
            performance and operational efficiency.
          </p>
          <p>
            I am proficient in technologies such as React, Node.js, JavaScript,
            and Go, and offer deep experience in both front-end and back-end
            development. By adopting an agile, client-focused approach, I ensure
            that each solution is tailored to meet specific business needs,
            delivering value through optimised workflows and high-impact
            results. Whether you’re seeking to enhance your digital landscape or
            build bespoke systems from scratch, my commitment is to deliver
            cutting-edge solutions that empower long-term success.
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
