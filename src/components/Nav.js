import React from 'react'
import {Link} from 'react-router-dom'
import './css/nav.css'
import {LinkedIn, GitHub, MailOutline, Description} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import DescriptionIcon from '@material-ui/icons/Description';
function Nav() {
    return (
        <div className="nav">
            <div className="nav__container">
                <div className="nav__title">
                    <h1><span>khalid</span> ibrahim</h1>
                    <h3>full stack developer and designer</h3>
                </div>
                <div className="nav__links">
                    <ul>
                        <Link className="nav__links__tag" to="/"><li>home</li></Link>
                        <Link className="nav__links__tag" to="/about"><li>about</li></Link>
                        <Link className="nav__links__tag" to="/projects"><li>portfolio</li></Link>
                    </ul>
                </div>
                <div className="nav__socials">
                    <div className="nav__socials__icons">
                        <a href={"https://www.linkedin.com/"} target="_blank"><span> <LinkedIn className="icons li" /> </span></a>
                        <a href={'https://github.com/bigkay-designer/'} target="_blank"><span> <GitHub className="icons gh" />  </span></a>
                        <a href={"https://mail.google.com/mail/u/0/#inbox?compose=new"} target="_blank"><span> <MailOutline className="icons em" /> </span></a>
                        <a href={"#"} target="_blank"><span> <Description className="icons desc" />   </span></a>
                         
                    </div>
                </div>
                <div className="footer">
                    <footer className="footer__container">
                        <div className="nav__contact">
                            <h2>Any questions don't hesitate to contact me</h2>
                            <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank">ibrahimkhalid478@gmail.com</a></p>
                            <p>07494498323</p>
                        </div>
                        <h4> © 2020 Khalid Ibrahim. All Rights Reserved.</h4>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Nav
