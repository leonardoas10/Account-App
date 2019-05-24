import React from 'react';
import { Image } from 'react-bootstrap';
import './Navbar.css';
import Iconuser from './usericon.png';
import Icon from '../Icon/Icon';
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => {
    const renderLinks = () => {
        if (props.location.pathname === "/") {
            return (
                <React.Fragment>
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
                <span className="title">My Account App</span>
                {renderLinks()}
        </div>
    )
}

export default withRouter(Navbar);