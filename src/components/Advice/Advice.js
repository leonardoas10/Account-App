import React from 'react';
import bg from './bg.png';
import './Advice.css';

const Advice = (props) => {
    const { title, description, link, footer } = props;
    return (
        <div className="Advice">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <img src={bg} alt="bg"></img>
            <h3>{link}</h3>
            <h4>{footer}</h4>
        </div>
    );
}

export default Advice;