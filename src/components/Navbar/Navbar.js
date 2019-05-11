import React from 'react';
import { Image } from 'react-bootstrap';
import './Navbar.css';
import Iconuser from './usericon.png';
import Icon from '../Icon/Icon';
import { Link, Switch, Route } from "react-router-dom";

const Navbar = (props) => {
    const renderLinks = () => {
        return (
            <Switch>
                <Route path="/signin" component={() => <Link className="position" to='/register'>Register</Link>} />
                <Route path="/" exact component={() =>
                    <div>
                        <Link className="objetives" to='/objetives'>Objetives</Link>
                        <Image src={Iconuser} onClick={props.onShow} />
                        <Icon show={props.show} onLogout={props.onRouteChange} />
                    </div>} />
                <Route path="/register" component={() => <Link className="position" to='/signin'>Sign In</Link>} />
                <Route path="/objetives" component={() => <Link className="position" to='/'>Dashboard</Link>} />
            </Switch>
        )

        // if (props.route === '/'){
        //     return (
        //         <div>
        //             <Image src={Iconuser} roundedCircle onClick={props.onShow} />
        //             <Icon show={props.show} onLogout={props.onRouteChange} />
        //         </div>
        //     )
        // }
        // else if (props.route === 'register') {
        //     return <Link className="position" to='/register'>Register</Link>
        // }

        // else {
        //     return <Link className="position" style={{ textDecoration: 'none' }} to='/signin'>Sign In</Link>
        // }

    }
    return (
        <div className="navbar">
            <nav className="nav">
                <span>My Account App</span>
                {renderLinks()}
            </nav>
        </div>
    )
}

export default Navbar;