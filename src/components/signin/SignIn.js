import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContextData } from '../../context/ContextData'
import SignWith from '../sign-with/SignWith'
import './signin.css'

export const SignIn = () => {
    const { user, setCheckAdmin, setisLoggedin, setLoggedUser } = useContext(ContextData);
    const [check, setCheck] = useState(false);
    const [loginDx, setLoginDx] = useState({
        email: "",
        password: ""
    })
    const loggedHistory = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault();
        if (!loginDx.email || !loginDx.password) {
            return setCheck(true)
        }
        if (loginDx.email === "admin" && loginDx.password === "admin") {
            setCheckAdmin(true);
            loggedHistory("/admin")

            return
        }
        const login = user.filter(({ email, password }) => {
            return (loginDx.email === email && loginDx.password === password)
        })

        if (!login.length) {
            alert("incorrect details")
        } else {
            setLoggedUser(login)
            setisLoggedin(true)
            localStorage.setItem('Loggedin', JSON.stringify(login))
            loggedHistory("/")
        }
        // try {
        //     const login = await fetch("http://159.65.21.42:9000/login", {
        //         method: 'post',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         WithCredentials: true,
        //         body: JSON.stringify(loginDx)
        //     })

        //     const current_logged = await login.json();
        //     console.log(current_logged);
        //     localStorage.setItem('Loggedin', JSON.stringify(current_logged))

        // } catch (err) {
        //     if (!err) {
        //         alert('No Server Response')
        //     } else if (err === 400) {
        //         alert('User does not Exist')
        //     } else if (err === 401) {
        //         alert('Unauthorized')
        //     } else {
        //         alert('Login Failed')
        //     }
        // }
    }
    return (
        <div className='sign-in'>
            <form action="">
                <div className="form-group">
                    <input type="email" placeholder='Email'
                        value={loginDx.email}
                        onChange={(e) => setLoginDx({ ...loginDx, email: e.target.value })} />
                    {check && loginDx.email === "" ? (<span>Enter your email to login</span>) : null}
                </div>
                <div className="form-group">
                    <input type="password" placeholder='Password'
                        value={loginDx.password}
                        onChange={(e) => setLoginDx({ ...loginDx, password: e.target.value })} />
                    {check && loginDx.password === "" ? (<span>Enter your password to login</span>) : null}
                </div>
                <Link>Forgot password?</Link>
                <div className="form-group">
                    <button onClick={(e) => handleLogin(e)}>Sign in</button>
                </div>
            </form>
            <SignWith />
        </div>
    )
}
