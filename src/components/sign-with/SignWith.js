import React from 'react'
import google from '../../images/google.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import apple from '../../images/apple.jpg';
import './signwith.css';
const SignWith = () => {
    return (
        <div>
            <div className='flex-line'><div className="hr"><hr /></div><div>Or continue with</div><div className="hr"><hr /></div></div>
            <div className='sign-with'>
                <div className="imgcon">
                    <img src={google} alt="img" />
                </div>
                <div className="imgcon">
                    <img src={facebook} alt="img" />
                </div>
                <div className="imgcon">
                    <img src={twitter} alt="img" />
                </div>
                <div className="imgcon">
                    <img src={apple} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default SignWith
