import React, { useContext } from 'react'
import { useState } from 'react';
import { ContextData } from '../../context/ContextData';
import { Modal } from '../modal/Modal'
import { SignIn } from '../signin/SignIn';
import SignUp from '../sign-up/SignUp';
import './reg_signin.css';

export const RegSignin = ({ bgcl1, cl1, bgcl2, cl2, rd }) => {
    // const { openModal, setopenModal } = useContext(ContextData)
    const [openModal, setopenModal] = useState(false)
    const [active, setActive] = useState(1);
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    const btn1Style = {
        background: bgcl1,
        color: cl1,
        borderRadius: rd
    }
    const btn2Style = {
        backgroundColor: bgcl2,
        color: cl2,
        borderRadius: rd
    }
    const handleSignup = (index) => {
        setopenModal(true);
        setLogin(false);
        setSignup(true);
        setActive(index);
    }
    const handleLogin = (index) => {
        setopenModal(true);
        setLogin(true);
        setSignup(false);
        setActive(index);

    }
    return (
        <div className="flex-btn">
            <button style={btn1Style} onClick={() => handleSignup(2)}>Register</button>
            <button style={btn2Style} onClick={() => handleLogin(1)}>Sign in</button>
            <Modal
                open={openModal}
                active={active}
                close={() => setopenModal(false)}
                handleState2={() => handleLogin(1)}
                handleState1={() => handleSignup(2)}

                title1="Register"
                title2="Sign in">
                {login && (<SignIn />)}
                {signup && (<SignUp />)}
            </Modal>
        </div>
    )
}
