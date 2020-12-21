import React from 'react'
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import CloseIcon from '@material-ui/icons/Close';
import './css/main.css'

function Modal({open,  children}) {

    // const style = {
    //     backgroundColor: '#fff',
    //     position: 'fixed',
    //     top:'50%',
    //     left: '50%',
    //     animation: 'fadein 0.5s',
    //     transform:'translate(-50%, -50%) ',
    //     zInedx: '1000'
    // }
    
    if(!open) return null
    return (
        <div className="main__modal">
            {children}
        </div>
    )
}

export default Modal
