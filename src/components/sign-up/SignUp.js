import React from 'react';
import { Link } from 'react-router-dom';
import SignWith from '../sign-with/SignWith';
import './signup.css';

const SignUp = () => {
    return (
        <div className='sign-up'>
            <form action="">
                <div className="form-group">
                    <select name="" id="">
                        <option value="">Nigeria</option>
                    </select>
                    <Link>Why choose your location?</Link>
                </div>
                <div className="form-group">
                    <input type="email" placeholder='Email' />
                </div>
                <div className="form-group">
                    <input type="password" placeholder='Password' />
                </div>

                <div className="form-group">
                    <button>Sign in</button>
                </div>
            </form>
            <SignWith />
        </div>
    )
}

export default SignUp
