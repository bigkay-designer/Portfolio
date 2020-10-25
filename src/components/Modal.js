import React, {useState, useEffect} from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';import CodeIcon from '@material-ui/icons/Code';
import './css/main.css'

function Modal({open,  children}) {

    const style = {
        backgroundColor: '#fff',
        position: 'fixed',
        top:'50%',
        left: '50%',
        transform:'translate(-50%, -50%) ',
        zInedx: '1000'
    }
    
    if(!open) return null
    return (
        <div style={style} className="modal">
            {children}
        </div>
    )
}

export default Modal
