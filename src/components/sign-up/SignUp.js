import React from 'react';
import { Link, } from 'react-router-dom';
import { useState, useContext } from 'react';
import SignWith from '../sign-with/SignWith';
import './signup.css';
import { ContextData } from '../../context/ContextData';

const SignUp = () => {
    const { getUsers, setopenModal } = useContext(ContextData);
    const emptyUserData = {
        name: "",
        phone: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(emptyUserData);
    const [check, setCheck] = useState(false);
    const handleUserSubmit = async (e, callback) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email || !formData.password) {
            return setCheck(true);
        }

        try {
            const postUser = await fetch("http://159.65.21.42:9000/register", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            alert(`${formData.name} registration is successful. You can log in with your email and password`)
            callback();
            setFormData(emptyUserData);
            setopenModal(false)



        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='sign-up'>
            <form action="">
                <div className="form-group">
                    <select name="" id="">
                        <option value="">(your location)</option>
                        <option value="Nigeria">Nigeria</option>
                    </select>
                    <Link>Why choose your location?</Link>

                </div>
                <div className="form-group">
                    <input type="text" placeholder='Name'
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {check && formData.name === "" ? (<span>Name field is required</span>) : null}
                </div>
                <div className="form-group">
                    <input type="number" placeholder='Phone Number'
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    {check && formData.phone === "" ? (<span>Phone field is required</span>) : null}
                </div>
                <div className="form-group">
                    <input type="email" placeholder='Email'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    {check && formData.email === "" ? (<span>Email field is required</span>) : null}
                </div>
                <div className="form-group">
                    <input type="password" placeholder='Password'
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    {check && formData.password === "" ? (<span>Password field is required</span>) : null}
                </div>

                <div className="form-group">
                    <button onClick={(e) => handleUserSubmit(e, getUsers)}>Create account</button>
                </div>
            </form>
            <SignWith />
        </div>
    )
}

export default SignUp
