import React from 'react';
import Contentdashboard from './Contentdashboard';
import Advice from '../Advice/Advice';
import './Dashboard.css'
import NavLink from 'react-bootstrap/NavLink';
import Yourinvestment from './Yourinvestment';

const Advicetext = ["An App that make your CSS live easier!"];
const Bglink = <NavLink href="https://leonardoas10.github.io/index.html" className="gblink" target="_blank">Try It!</NavLink>

/**
 * Modelo Invesments
 */
const investments = [
    {
        id: 'mency&hs',
        title: 'Mencys & HS',
        totalDeposited: 808, //calc backend
    },
    {
        id: 'zlatanceox',
        title: 'Zlatan CeoX',
        totalDeposited: 926, //calc backend
    },
    {
        id: 'unitedbank',
        title: "United Bank",
        totalDeposited: 1680,
    }
]

const Dashboard = () => {
    return (
        <>
            <div className="Container">
                <Advice className="AdviceContainer" title="Background Generator" description={Advicetext} link={Bglink} footer="By Leonardo AS" />
                <hr className="drawline"></hr>
                <div className="Containerflex">
                    <Contentdashboard title="Deposited" amount={5} description="Last Deposit: (...)" />
                    <Contentdashboard title="Balance" amount={7} description="It´s efficient, invest!" />
                    <Contentdashboard title="Total Earn" amount={2} description="Keep going!" />
                </div>
                <Yourinvestment className="AdviceContainer" title="Your Investments" investments={investments} />
            </div>
        </>
    );
}

export default Dashboard;