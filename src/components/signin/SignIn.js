import React from 'react'
import { Link } from 'react-router-dom'
import SignWith from '../sign-with/SignWith'
import './signin.css'

export const SignIn = () => {
    return (
        <div className='sign-in'>
            <form action="">
                <div className="form-group">
                    <input type="email" placeholder='Email' />
                </div>
                <div className="form-group">
                    <input type="password" placeholder='Password' />
                </div>
                <Link>Forgot password?</Link>
                <div className="form-group">
                    <button>Sign in</button>
                </div>
            </form>
            <SignWith />
        </div>
    )
}
