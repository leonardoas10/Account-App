import React from 'react';
import './Investment.css'
import Contentinvestment from './Contentinvestment';
import Modala from './Modal';
import Details from './Details';    

 // Modelo Investment con transacciones
 
const investments = [
    {
    id: 'mency&hs',
    title: 'Mencys & HS',
    balance: -12,
    //totalDeposited: 100, //calc backend

    transactions: [
        {
            date: "14/05/2019",
            amount: 71,
            type: "Deposit"
        },
        {
            date: "14/05/2019",
            amount: 521,
            type: "Deposit"
        },
        {
            date: "14/05/2019",
            amount: 178,
            type: "Deposit"
        },
        {
            date: "14/05/2019",
            amount: 50,
            type: "Deposit"
        }
    ]
},
{
    id: 'zlatanceox',
    title: 'Zlatan CeoX',
    balance: -60,
    //totalDeposited: 210, //calc backend
    transactions: [
        {
            date: "14/05/2019",
            amount: 60,
            type: "Deposit"
        },
        {
            date: "14/05/2019",
            amount: 521,
            type: "Deposit"
        },
        {
            date: "14/05/2019",
            amount: 245,
            type: "Deposit"
        },
        {
            date: "14/05/2019",
            amount: 160,
            type: "Deposit"
        }
    ]
},
{
    id: 'unitedbank',
    title: 'United Bank',
    balance: -12,
    //totalDeposited: 950, //calc backend
    transactions: [
        {
            date: "14/05/2019",
            amount: 134,
            type: "Deposit"
        },
        {
            date: "14/05/2019",
            amount: 564,
            type: "Deposit"
        },
        {
            date: "14/05/2019",
            amount: 178,
            type: "Deposit"
        },
        {
            date: "14/05/2019",
            amount: 816,
            type: "Deposit"
        }
    ]
}
];

const calculatedInvestments = investments.map(investment => {
    const totalDeposited = investment.transactions.reduce((acc, prev) => {
        return acc + prev.amount
    }, 0);
    investment.totalDeposited = totalDeposited //aqui es*
    return investment
})

const findInvestmentById = (id) => {
    return calculatedInvestments.find(currentInvestment => currentInvestment.id === id);
}

const Investment = (props) => {
    const sum = (a, b) => { return a + b }
    const id = props.match.params.id;
    const investmentDetails = findInvestmentById(id);
    
    console.log(investmentDetails);
    const totalEarn = sum(investmentDetails.totalDeposited, investmentDetails.balance);
    return (
        <>
            <div className="Container-investment">
                <span className="investment-title">{investmentDetails.title}</span>
                <Modala/>
                <hr className="drawline-investment"></hr>
                <div className="Containerflex-investment">
                    <Contentinvestment title="Deposited" amount={investmentDetails.totalDeposited} />
                    <Contentinvestment title="Balance" amount={investmentDetails.balance * -1} />
                    <Contentinvestment title="Total Earn" amount={totalEarn} />
                </div>
                <Details title="Transactions" time='Time' money='Amount' transaction='Type' details={investmentDetails.transactions} />
                <hr className="drawline-container"></hr>
            </div>
        </>
    )
}

export default Investment;
