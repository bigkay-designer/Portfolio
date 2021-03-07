import React from 'react'
import {SiJavascript, SiHtml5, SiReact, SiNodeDotJs, SiCss3, SiSass, SiFirebase, SiNginx, SiMongodb, SiLinux, SiFigma, SiVisualstudio} from 'react-icons/si'
import './css/MyTech.css'
function MyTech() {
    return (
        <div className="about__icons">
            <SiHtml5 className="about__skill__icons html" />
            <SiCss3 className="about__skill__icons css" />
            <SiSass className="about__skill__icons sass" />
            <SiJavascript className="about__skill__icons js"  />
            <SiReact className="about__skill__icons react" />
            <SiNodeDotJs className="about__skill__icons nodejs" />
            <SiFirebase className="about__skill__icons fb"  />
            <SiNginx className="about__skill__icons ngx" />
            <SiMongodb className="about__skill__icons mongo" />
            <SiLinux className="about__skill__icons linux" />
            <SiFigma className="about__skill__icons figma" />
            <SiVisualstudio className="about__skill__icons vs" />
        </div>
    )
}

export default MyTech
