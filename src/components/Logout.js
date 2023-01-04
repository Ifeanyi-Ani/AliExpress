import React from 'react'
import { useContext } from 'react'
import { ContextData } from '../context/ContextData'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const history = useNavigate()
    const { setisLoggedin } = useContext(ContextData);
    const handleLogout = () => {
        setisLoggedin(false)
        localStorage.removeItem('Loggedin')
        history("/")
    }
    return (
        <div>
            <button className="logout" onClick={handleLogout}>Sign out</button>
        </div>
    )
}

export default Logout