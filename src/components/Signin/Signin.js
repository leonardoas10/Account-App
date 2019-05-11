import React from 'react';
import Signincss from './Signin.css'
import { Link } from "react-router-dom";    

const Signin = () => {
    return (
        <div className="Signin">
            <h1>Sign In</h1>
            <label>Email</label>
            <input
                className="input-nosubmit"
                type="email"
            />
            <label>Password</label>
            <input
                className="input-nosubmit"
                type="password"
            />
            <div>
                <Link style={Signincss} className='submit-buttom' to='/'>Sign In</Link>
            </div>  
        </div>
    );
}

export default Signin;