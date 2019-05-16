import React from 'react';
import './Register.css'
import { Link } from "react-router-dom";   

const Register = () => {
    return (
        <div className="Register">
            <h1>Register</h1>
            <label>Name</label>
            <input
                className="input-nosubmit"
                type="text"
            />
            <label>Email</label>
            <input
                className="input-nosubmit"
                type="email"
            />
            <label>Password</label>
            <input
                className="input-nosubmit"
                type="email"
            />
            <Link className='submit-buttom' to='/'>Register</Link>
        </div>
    );
}

export default Register;