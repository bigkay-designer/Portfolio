import React from 'react'
import {fa} from '@fortawesome/free-solid-svg-icons'
import {SiJavascript, SiHtml5, SiReact, SiNodeDotJs, SiCss3, SiSass, SiFirebase, SiNginx} from 'react-icons/si'
function About (){
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__title">
                    <h3>About us</h3>
                    <h1>WHO AM I? </h1>
                </div>
                <div className="about__content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, beatae earum nemo laborum velit provident.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam molestiae assumenda sapiente, eos aperiam.</p>
                </div>
                <div className="about__skill__ShowCase">
                    <SiReact />
                    <SiJavascript />
                    <SiHtml5 />
                    <SiCss3 />
                    <SiSass />
                    <SiFirebase />
                    <SiNginx />
                    <SiNodeDotJs/>
                </div>
            </div>
        </div>
    )
}

export default About
