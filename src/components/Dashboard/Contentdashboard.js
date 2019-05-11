import React from 'react';
import './Contentdashboard.css'

const Contentdashboard = (props) => {
    const {title, description, amount} = props;
    return (
        <div className="Contentdashboard">
            <span>{title}</span>
            <span>{description}</span>
            <span>${amount}</span>
        </div>
    );
}

export default Contentdashboard;