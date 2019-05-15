import React from 'react';
import './Yourinvestment.css';
import {Link} from 'react-router-dom';

const Yourinvestment = (props) => {
    const { title, investments } = props;

    const total = investments.reduce((prev, curr) => {
        return curr.totalDeposited + prev
    }, 0);
    return (
        <div className="Yourinvestment">
            <h1>{title}</h1>
            {investments.map((investment, index) => {
                return (
                    <h2 key={index}>
                        {/* <span>{investment.title}</span> */}
                        <Link to={'/investments/' + investment.id} className="investment-link">{investment.title}</Link>
                        <span>${investment.totalDeposited} </span>
                    </h2>
                )
            })}
            <hr className="drawline-total"></hr>
            <h3>
                <span>Total:</span>
                <span>${total}</span>
            </h3>
        </div>
    );
}

export default Yourinvestment;