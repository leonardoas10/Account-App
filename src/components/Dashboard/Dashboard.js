import React from 'react';
import Contentdashboard from './Contentdashboard';
import Advice from '../Advice/Advice';
import './Dashboard.css'
import NavLink from 'react-bootstrap/NavLink';

const Advicetext = ["An App that make your CSS live easier!"];
const Bglink = <NavLink href="https://leonardoas10.github.io/index.html" className="gblink" target="_blank">Try It!</NavLink>

const Dashboard = () => {
    return (
    <>
    <div className="Container">
        <Advice title="Background Generator"  description={Advicetext} link={Bglink} footer="By Leonardo AS" className="AdviceContainer"/>

        <div className="Containerflex">
            <Contentdashboard title="Balance" amount={1} description="Last Year"/>
            <Contentdashboard title="Average" amount={2} description="Last Month"/>
            <Contentdashboard title="Last Transactions" amount={3} description="Yesterday" />
        </div>  
    </div>
    </>   
    );
}

export default Dashboard;