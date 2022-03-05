import React, { useLayoutEffect, useRef, useState } from 'react';

export default function ModalExample(){
    const [show, setShow] = useState(false);
    const popup = useRef();
    const button = useRef();
    useLayoutEffect(() => {
        if(popup.current == null || button.current == null) return
        const {buttom} = button.current.getBoundingClientRect();
        popup.current.style.top = `${buttom + 25}px`;
    },[show]);
    return(
        <>
        <button ref={button} onClick={()=> setShow(prev => !prev)}>Click Here</button>
        {show && (
            <div style={{position: 'abosolute'}} ref={popup}>
            This is a popup    
            </div>
        )}
        </>
    );
}