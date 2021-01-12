import React from 'react'
import {Link} from 'react-router-dom'

import './css/showcase.css'
function Showcase() {
    return (
            <div className="showCase">
                <div className="showcase__overlay"></div>  
                <div className="showCase__container">
                        <p>
                            I'm a full stack web developer currently based in London, United kingdom. 
                            hit me up and let's create something special togther!
                        </p>
                        <Link  to="/projects"> <button>view projects</button> </Link>
                        <button className="btn__resume"> <a href="https://drive.google.com/file/d/142DzFIjNzHXdDmg94gl5Rn7xtQaNYvXK/view?usp=sharing" target="_blank" rel="noreferrer"> view Resume </a></button>

                </div>

            </div>
    )
}

export default Showcase
