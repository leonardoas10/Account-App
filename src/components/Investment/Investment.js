import React from 'react';
import './Investment.css'
import Contentinvestment from './Contentinvestment';

const Investment = () => {
    return (
        <>
        <div className="Container-investment">
            <span className="investment-title">Mency´s and HS</span>
            <hr className="drawline-investment"></hr>
            <div className="Containerflex-investment">
                <Contentinvestment title="Deposited" amount={1} />
                <Contentinvestment title="Balance" amount={1} />
                <Contentinvestment title="Total Earn" amount={1} />
            </div>
        </div>
        </>
    )
}

export default Investment;
