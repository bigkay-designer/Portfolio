import React, {useState, useRef} from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';import CodeIcon from '@material-ui/icons/Code';
import {Button} from '@material-ui/core'
import {NavigateNext, NavigateBefore} from '@material-ui/icons'
import modalData from './modalData.json'
import Modal from './Modal'
import './css/project.css'
function Projects() {
    const [isOpen, setIsOpen] = useState(false)
    const refElement = useRef(null)


    const openModalHandler = (val)=>{
        setIsOpen(val)
    }

    const hideModalHandler = () =>{
        setIsOpen(false)
    }

    const scrollRightHandler = (moveLeft) => {
        refElement.current.scrollLeft += moveLeft

    };
    const scrollLeftHandler = (moveLeft) => {
        refElement.current.scrollLeft += moveLeft

    };

    return (
        <div className="projects" id="projects">
            <div className="projects__container">
                <div className="project__header">
                    <h1 className="project__title">projects</h1>
                    <p className="project__subTitle"> Down below you will find some of my latest projects in which I have used various technologies!</p>
                </div>

                    <div className="projects__cards_container" ref={refElement}>
                        <div className="project__wrapper">
                            {modalData.map((data)=>(
                                
                                <div key={data.id} className="projects__cards">
                                    <div className="img-hover">
                                        <img onClick={()=>openModalHandler(data.id)}  className="projects__img" src={data.img} alt="netflix-clone"/>
                                    </div>
                                        <div className="project__intro">
                                            <p> {data.projectIntro} </p>
                                        </div>
                                        <div className="project__cards__btn">
                                            <button onClick={()=>openModalHandler(data.id)} ><VisibilityIcon className="btn-icon" /> {data.title} </button>
                                        </div>
                    
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="services__btn">
                        <div onClick={() => scrollLeftHandler(-280)} className="btn">
                            <NavigateBefore />
                            <Button className="prev">prev</Button>
                        </div>
                        <div onClick={() => scrollRightHandler(280)} className="btn">
                            <Button id="test" className="next">next</Button>
                            <NavigateNext />
                        </div>
                    </div>
                            <div onClick={() => hideModalHandler()} className={`${isOpen && "overlay-div"}`}></div>

                    {/* ************************** */}
                <div className="modal">
                    {modalData.map(data=>(
                        <Modal open={isOpen === data.id} >
                            <div key={data.id} className="modal__container">
                                <>  <img className="projects__img" src={data.img} alt="netflix-clone"/>
                                    <div className="projects__cards--popup">
                                        <div className="popup-title">
                                            <span>project</span>
                                            <button onClick={()=>hideModalHandler(data.id)}><CloseIcon className="popup__close" style={{color: "red"}} fontSize="large" /> </button>
                                        </div>
                                        <div className="project__body">
                                            <h2> {data.title} </h2>
                                            <div className="projects__cards--popup__tech">
                                                <ul>
                                                    {data.usedTech.map(data=>(
                                                        <li> {data} </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <span>about</span>
                                            <div className="project__para">
                                                <ul>
                                                    {data.content.map(content =>(
                                                        <li> {content} </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="popup__btn">
                                            <button className="demo"><a href={data.live} target="_blank" rel="noreferrer"><span><VisibilityIcon /> </span> Demo</a> </button>
                                            <button className="code" ><a className="dark" href={data.github} target="_blank" rel="noreferrer"><span><CodeIcon className="dark" /></span>code</a></button>
                                        </div>
                                    </div>
                                </>
                            </div>
                        </Modal>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects