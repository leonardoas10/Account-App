import React from 'react';
import './Contentdashboard.css'

const Contentdashboard = (props) => {
    const {title, description, amount} = props;
    return (
        <div className="Contentdashboard">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>${amount}</h3>
        </div>
    );
}

export default Contentdashboard;