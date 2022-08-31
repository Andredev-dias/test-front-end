import React from 'react';


const Modal = (props) => {
    return(
        <div>
            <h1>{props.data.gender}</h1>
            <p onClick={props.close}>X</p>
        </div>
    )
}
export default Modal;