import React from 'react'

function Modal({open,  children}) {

    
    if(!open) return null
    return (
        <div className="main__modal">
            {children}
        </div>
    )
}

export default Modal
