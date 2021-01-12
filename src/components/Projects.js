import React, {useState} from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';import CodeIcon from '@material-ui/icons/Code';
import modalData from './modalData.json'
import Modal from './Modal'
import './css/project.css'
function Projects() {
    const [isOpen, setIsOpen] = useState(false)

    const openModalHandler = (val)=>{
        window.scrollTo(0, 0);
        console.log(val)
        setIsOpen(val)
    }

    const hideModalHandler = () =>{
        setIsOpen(false)
    }

    return (
        <div className="projects">
            <div className="projects__container">
                <h1 className="project__title">projects</h1>
                <p className="project__subTitle"> Down below you will find some of my latest projects which i have used various technologies!</p>

                    <div className="projects__cards_container">
                        {modalData.map((data)=>(
                            
                               <div key={data.id} className="projects__cards">
                                   <div className="project__intro">
                                       <p> {data.projectIntro} </p>
                                   </div>
                                   <div className="img-hover">
                                       <img onClick={()=>openModalHandler(data.id)}  className="projects__img" src={data.img} alt="netflix-clone"/>
                                       <div className="project__cards__btn">
                                           <button onClick={()=>openModalHandler(data.id)} ><VisibilityIcon className="btn-icon" /> {data.title} </button>
                                       </div>
                                   </div>
                   
                               </div>
                        ))}
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
                                        <div className="popup__btn">
                                            <button><a href={data.live} target="_blank" rel="noreferrer"><span><VisibilityIcon /> </span> Demo</a> </button>
                                            <button><a href={data.github} target="_blank" rel="noreferrer"><span><CodeIcon /></span>code</a></button>
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