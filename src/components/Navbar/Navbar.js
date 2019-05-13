import React from 'react';
import { Image } from 'react-bootstrap';
import './Navbar.css';
import Iconuser from './usericon.png';
import Icon from '../Icon/Icon';
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {
    console.log(props, "aqui es");
    const renderLinks = () => {
        if (props.location.pathname === "/") {
            return (
                <React.Fragment>
                    <Link className="investment" to='/investment'>Investment</Link>
                    <Image src={Iconuser} onClick={props.onShow} />
                    <Icon show={props.show} onLogout={props.onRouteChange} />
                </React.Fragment>
            )
        }
        else if (props.location.pathname === "/signin"){
               return <Link className="position" to='/register'>Register</Link>
        }
        else if (props.location.pathname === "/register") {
            return <Link className="position" to='/signin'>Sign In</Link>    
        }
        else {
            return (
                <React.Fragment>
                    <Link className="dashboard" to='/'>Dashboard</Link>
                    <Image src={Iconuser} onClick={props.onShow} />
                    <Icon show={props.show} onLogout={props.onRouteChange} />
                </React.Fragment>
            )
        }
    }
    return (
        <div className="navbar">
            <nav className="nav">
                <span className="title">My Account App</span>
                {renderLinks()}
            </nav>
        </div>
    )
}

export default withRouter(Navbar);