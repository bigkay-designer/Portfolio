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
                    <h3>full stack developer</h3>
                </div>
                <div className="nav__links">
                    <ul>
                        <li><Link className="nav__links__tag" to="/home">home</Link> </li>
                        <li><Link className="nav__links__tag" to="/home">about</Link> </li>
                        <li><Link className="nav__links__tag" to="/home">portfolio</Link> </li>
                        <li><Link className="nav__links__tag" to="/home">contact</Link> </li>
                    </ul>
                </div>
                <div className="nav__socials">
                    <div>
                        <LinkedIn className="icons li" /> 
                        <h3>LinkedIn</h3> 
                    </div>
                    <div>
                        <GitHub className="icons gh" /> 
                        <h3>GitHub</h3> 
                    </div>
                    <div>
                        <MailOutline className="icons em" /> 
                        <h3>Email</h3> 
                    </div>
                    <div>
                        <Description className="icons desc" /> 
                        <h3>Resume</h3> 
                    </div>                   
                </div>
                <div className="footer">
                    <footer className="footer__container">
                        <h4> © 2020 Khalid Ibrahim. All Rights Reserved.</h4>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Nav
