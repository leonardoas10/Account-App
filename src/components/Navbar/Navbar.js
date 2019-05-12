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
                    <Link className="objetives" to='/objetives'>Objetives</Link>
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
            return <Link className="position" to='/'>Dashboard</Link>
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