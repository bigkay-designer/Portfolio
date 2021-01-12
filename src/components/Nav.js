import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './css/nav.css'
import {LinkedIn, GitHub, Close,Menu,  MailOutline, Description} from '@material-ui/icons'
// import MenuIcon from '@material-ui/icons/Menu';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import DescriptionIcon from '@material-ui/icons/Description';
function Nav() {
    const [nav, setNav] = useState(false)

    return (    
        <>
            <div className="small__nav">
            <div className="nav__open">
                        <span onClick={()=> setNav(true)}><Menu className="nav__open__icons" /></span>
                    </div>
            </div>
            <div className={`nav ${nav && "small__menu"}`}>
                <div className="nav__close">
                    <span onClick={()=> setNav(false)}><Close className="nav__close__icons" /></span>
                </div>
                <div className={`nav__container`}>
                    <div className="nav__title">
                        <h1><span>khalid</span> ibrahim</h1>
                        <h3>full stack developer and designer</h3>
                    </div>
                    <div className="nav__links">
                        <ul>
                            <Link  onClick={()=> setNav(false)} className="nav__links__tag" to="/"><li>home</li></Link>
                            <Link  onClick={()=> setNav(false)} className="nav__links__tag" to="/about"><li>about</li></Link>
                            <Link  onClick={()=> setNav(false)} className="nav__links__tag" to="/projects"><li>portfolio</li></Link>
                        </ul>
                    </div>
                    <div className="nav__socials">
                        <div className="nav__socials__icons">
                            <a href={"https://www.linkedin.com/in/khalid-ibrahim-3b2b71201"} target="_blank" rel="noreferrer"><span> <LinkedIn className="icons li" /> </span> <span className="nav__icons__title">LinkedIn</span> </a>
                            <a href={'https://github.com/bigkay-designer/'} target="_blank" rel="noreferrer"><span> <GitHub className="icons gh" />  </span> <span className="nav__icons__title">GitHub</span> </a>
                            <a href={"https://mail.google.com/mail/u/0/#inbox?compose=new"} target="_blank" rel="noreferrer"><span> <MailOutline className="icons em" /> </span> <span className="nav__icons__title">Email</span></a>
                            <a href={"https://drive.google.com/file/d/142DzFIjNzHXdDmg94gl5Rn7xtQaNYvXK/view?usp=sharing"} target="_blank" rel="noreferrer"><span> <Description className="icons desc" /> </span> <span className="nav__icons__title">Resume</span> </a>
                            
                        </div>
                    </div>
                    <div className="footer">
                        <footer className="footer__container">
                            <div className="nav__contact">
                                <h2>Any questions don't hesitate to contact me</h2>
                                <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noreferrer">ibrahimkhalid478@gmail.com</a></p>
                                <p>07494498323</p>
                            </div>
                            <h4> © 2020 Khalid Ibrahim. All Rights Reserved.</h4>
                        </footer>
                    </div>
                </div>
            </div>
            <div onClick={()=> setNav(false)} className={`${nav && "small__overlay"}`}></div>

        </> 
    )
}

export default Nav
