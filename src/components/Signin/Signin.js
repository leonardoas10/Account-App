import React, {Component} from 'react';
import Signincss from './Signin.css'
import { Link } from "react-router-dom";    


class Signin extends Component {
    state= {
        signInPassword: "",
        signInEmail: ""
    }

    
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

    render() {
        return (
            <div className="Signin">
                <h1>Sign In</h1>
                <label>Email</label>
                <input
                    className="input-nosubmit"
                    type="email"
                    onChange={this.onEmailChange}
                />
                <label>Password</label>
                <input
                    className="input-nosubmit"
                    type="password"
                    onChange={this.onPasswordChange}
                />
                <Link style={Signincss} className='submit-buttom' to='/'>Sign In</Link>
            </div>
        );
    }
}





export default Signin;