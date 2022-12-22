import React from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';
import './modal.css';

export const Modal = ({ open, children, close, handleLogin, handleSignup, active }) => {
    if (!open) return null

    console.log(active);
    return ReactDOM.createPortal(
        <div className="overlay">
            <div className='modal'>
                <div className='button'><IoClose onClick={close} role="button" /></div>
                <div className='navigate'>
                    <button className={`${active === 2 ? 'active' : " "} `} onClick={handleSignup}>Register</button>
                    <button className={`${active === 1 ? 'active' : " "}`} onClick={handleLogin}>Sign in</button>
                </div>
                {children}
            </div>

        </div>,
        document.getElementById('portal')
    )
}
