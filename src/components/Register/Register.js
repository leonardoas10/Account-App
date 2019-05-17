import React, {Component} from 'react';
import './Register.css'

class Register extends Component {
    state = {
        registerName: "",
        registerEmail: "",
        registerPassword: "",
        hasError: false,
    }

    fetchRegister = (event) => {
        event.preventDefault();
        fetch("http://localhost:8000/api/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword,
            })
        },
        )
            .then(response => response.json())
            .then(data => {
                console.log(data, "data")
                if (data.success) {
                    console.log(this.props);
                    this.props.history.push("/");
                }
                else {
                    this.setState({ hasError: true })
                }
            })
    }

    onNameChange = (event) => {
        this.setState({ registerName: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value })
    }

    render() {
        return (
            <div className="Register">
                <h1>Register</h1>
                <label>Name</label>
                <input
                    className="input-nosubmit"
                    type="name"
                    onChange={this.onNameChange}
                    value={this.state.registerName}
                />
                <label>Email</label>
                <input
                    className="input-nosubmit"
                    type="email"
                    onChange={this.onEmailChange}
                    value={this.state.registerEmail}
                />
                <label>Password</label>
                <input
                    className="input-nosubmit"
                    type="password"
                    onChange={this.onPasswordChange}
                    value={this.state.registerPassword}
                />
                <span className={this.state.hasError ? null : "hidden-error"} >Write in all inputs</span>
                <button  className='submit-buttom' type="button" onClick={this.fetchRegister}>Register</button>
            </div>
        );
    }

}

export default Register;