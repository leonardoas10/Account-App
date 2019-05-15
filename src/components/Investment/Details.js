import React from 'react';
import './Details.css';


const Details = (props) => {
    const { title, time, money, transaction, details } = props;
    return (
        <div className="details">
            <h1>{title}</h1>
            <h2>  
                <span>{time}</span>
                <span>{money}</span>
                <span>{transaction}</span>
            </h2>
            {details.map((detail, index) => {
                return (
                    <h3 key={index}>
                        <span>{detail.date}</span>
                        <span>${detail.amount} </span>
                        <span>{detail.type} </span>
                    </h3>
                )
            })}
        </div>
    );
}

export default Details;