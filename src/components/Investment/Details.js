import React from 'react';
import './Details.css';

const Details = (props) => {
    const { title, subtitle1, subtitle2, amount1, amount2, total } = props;
    return (
        <div className="Yourinvestment">
            <h1>{title}</h1>
            <h2>{subtitle1} ${amount1}</h2>
            <h2>{subtitle2} ${amount2}</h2>
            <hr className="drawline-total"></hr> 
            <h3>{total}</h3>
        </div>
    );
}

export default Details;