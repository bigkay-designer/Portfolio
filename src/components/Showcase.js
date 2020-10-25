import React from 'react'
import {Link} from 'react-router-dom'
import './css/main.css'
function Showcase() {
    return (
            <div className="showCase">
                <div className="showCase__container">
                        <h1>Hi, It's khalid ibrahim</h1>
                        <p>
                            I'm a web developer currently based in London, United kingdom. 
                            hit me up and let's create something special togther!
                        </p>
                        <Link  to="/projects"> <button>view projects</button> </Link>

                </div>
            </div>
    )
}

export default Showcase
