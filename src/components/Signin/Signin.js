import React, {Component} from 'react';
import Signincss from './Signin.css' 

class Signin extends Component {
    state= {
        signInPassword: "",
        signInEmail: "",
        hasError: false,
    }

    fetchSignin = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/api/signin", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: this.state.signInEmail,
              password: this.state.signInPassword,
          })
        },
        )
        .then(response => response.json())
        .then(data => {console.log(data, "data")
            if (data.token) {
                console.log(this.props);
                this.props.history.push("/");
            }
            else {
                this.setState({hasError: true}) 
            }
        })
      }
    
  onEmailChange = (event) => {

    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

    render() {
        return (
            <form className="Signin">
                <h1>Sign In</h1>
                <label>Email</label>
                <input
                    name="email"
                    className="input-nosubmit"
                    type="email"
                    onChange={this.onEmailChange}
                    value={this.state.signInEmail}
                />
                <label>Password</label>
                <input
                    name="password"
                    className="input-nosubmit"
                    type="password"
                    onChange={this.onPasswordChange}
                    value={this.state.signInPassword}
                />
                <span className={this.state.hasError ? null : "hidden-error"} >error authentication</span>
                <button className='submit-buttom' type="button" onClick={this.fetchSignin}>Sign In</button>
            </form>
        );
    }
}





export default Signin;