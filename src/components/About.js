import React from 'react'
import {SiJavascript, SiHtml5, SiReact, SiNodeDotJs, SiCss3, SiSass, SiFirebase, SiNginx} from 'react-icons/si'
import {FaPencilRuler, FaFileCode} from 'react-icons/fa'
import './css/main.css'
function About (){
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__title">
                    <h3>About me</h3>
                    <h1>WHO AM I? </h1>
                </div>
                <div className="about__content">
                    <p>I am junior full stack developer and UX/UI designer. I create beautful & functional websites. Feel free to have a look at some of my projects!</p>
                    
                </div>

                <div className="about__skills__showCase">
                    <div className="about__design">
                        <div className="about__design__logo">
                            <FaPencilRuler />
                        </div>
                        <div className="about__design__title">
                            <h1>Designer</h1>
                            <p>I value simple content structure, clean design pattern, and thoughtful interactions.</p>
                        </div>
                        <div className="about__design__content">
                            <h1>Things i enjoy designing</h1>
                            <p>UX, UI, WEB, MOBILE,LOGOS</p>
                        </div>
                        <div className="about__design__tools">
                            <h1>design tools</h1>
                            <ul>
                                <li>Figma</li>
                                <li>sketch</li>
                                <li>adobe xd</li>
                                <li>photoshop</li>
                                <li>Invation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="about__code">
                        <div className="about__design__logo">
                            <FaFileCode />
                        </div>
                        <div className="about__design__title">
                            <h1>full stack developer</h1>
                            <p>I like to code from scratch and enjoy bringing ideas to life in the browser.</p>
                        </div>
                        <div className="about__design__content">
                            <h1>Techs i know</h1>
                            <div className="content__div">
                                <p>html</p>
                                <p>css</p>
                                <p>sass</p>
                                <p>material-ui</p>
                                <p>javaScript</p>
                                <p>react</p>
                                <p>nodeJs</p>
                                <p>nginx</p>
                            </div>
                        </div>
                        <div className="about__design__tools">
                            <h1>dev tools</h1>
                            <ul>
                                <li>Visual studio</li>
                                <li>sublime</li>
                                <li>terminal</li>
                                <li>linux</li>
                                <li>github</li>
                                <li>gitlao</li>
                                <li>firebase</li>
                                <li>digitalocean</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="about__icons">
                    <SiReact className="about__skill__icons react" />
                    <SiJavascript className="about__skill__icons js"  />
                    <SiHtml5 className="about__skill__icons html" />
                    <SiCss3 className="about__skill__icons css" />
                    <SiSass className="about__skill__icons sass" />
                    <SiFirebase className="about__skill__icons fb"  />
                    <SiNginx className="about__skill__icons ngx" />
                    <SiNodeDotJs className="about__skill__icons nodejs" />
                </div>
            </div>
        </div>
    )
}

export default About
