import React, {useState, useEffect} from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';import CodeIcon from '@material-ui/icons/Code';
import modalData from './modalData.json'
import Modal from './Modal'
import './css/main.css'
function Projects() {
    const [isOpen, setIsOpen] = useState(false)
    const [content, setContent] = useState([])


    const openModalHandler = (val)=>{
        window.scrollTo(0, 0);
        setIsOpen(val)
    }

    const hideModalHandler = (val) =>{
        setIsOpen(0)
    }

    return (
        <div className="projects">
            <div className="projects__container">
                <h1 className="project__title">projects</h1>
                <p className="project__subTitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, fuga!</p>

                    <div className="projects__cards_container">
                        {modalData.map((data)=>(
                            
                               <div className="projects__cards">
                                   <div className="img-hover">
                                       <img className="projects__img" src={data.img} alt="netflix-clone"/>
                                       <div className="project__cards__btn">
                                           <button onClick={()=>openModalHandler(data.id)} ><VisibilityIcon className="btn-icon" />View Project</button>
                                       </div>
                                   </div>
                   
                               </div>
                        ))}
                    </div>
                    <div className={`${isOpen && "overlay-div"}`}></div>

                    {/* ************************** */}
                <div className="modal">
                    {modalData.map(data=>(
                        <Modal open={isOpen === data.id} >
                            <div className="modal__container">
                                <>  <img className="projects__img" src={data.img} alt="netflix-clone"/>
                                    <div className="projects__cards--popup">
                                        <div className="popup-title">
                                            <span>project</span>
                                            <button onClick={()=>hideModalHandler(data.id)}><CloseIcon className="popup__close" style={{color: "red"}} fontSize="large" /> </button>
                                        </div>
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
                                            <p> {data.content} </p>
                                        </div>
                                        <div className="popup__btn">
                                            <button><a href={data.live} target="_blank"><span><VisibilityIcon /> </span> Demo</a> </button>
                                            <button><a href={data.github} target="_blank"><span><CodeIcon /></span>code</a></button>
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