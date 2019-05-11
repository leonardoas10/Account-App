import React from 'react';
import './Icon.css';
import { Link } from "react-router-dom";  

const Icon = (props) => {
    const clases = ["dropdown"];
    if (!props.show) clases.push("hidden")
    return (
        <div className={clases.join(" ")}>
            <p>Leonardo</p>
            <Link className='logout-buttom' to='/signin'>Log Out</Link>
        </div>
    )
}

export default Icon;