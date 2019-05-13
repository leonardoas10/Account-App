import React from 'react';
import './Contentinvestment.css'

const Contentinvestment = (props) => {
    const {title, amount} = props;
    return (
        <>
        <div className="Contentinvestment">
            <span>{title}</span>
            <span>${amount}</span>
        </div>
        </>
    )
}

export default Contentinvestment;