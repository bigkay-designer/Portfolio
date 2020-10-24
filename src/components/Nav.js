import React from 'react'
import './css/nav.css'
import MenuIcon from '@material-ui/icons/Menu';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__container">
                <h1><span>khalid</span> ibrahim</h1>
                <MenuIcon 
                className="nav__icon"
                 />
            </div>
        </div>
    )
}

export default Nav
