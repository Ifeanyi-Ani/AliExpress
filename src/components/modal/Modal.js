import React from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';
import './modal.css';

export const Modal = ({ open, children, close, handleState1, handleState2, active, title1, title2 }) => {
    if (!open) return null

    return ReactDOM.createPortal(
        <div className="overlay" onClick={close} role="button">
            <div className='modal' onClick={(e) => { e.stopPropagation() }}>
                <div className='button'><IoClose onClick={close} role="button" /></div>
                <div className='navigate'>
                    <button className={`${active === 2 ? 'active' : " "} `} onClick={handleState1}>{title1}</button>
                    <button className={`${active === 1 ? 'active' : " "}`} onClick={handleState2}>{title2}</button>
                </div>
                {children}
            </div>

        </div>,
        document.getElementById('portal')
    )
}
export default Modal