import React from 'react';
import Contentdashboard from './Contentdashboard';
import Advice from '../Advice/Advice';
import './Dashboard.css'
import NavLink from 'react-bootstrap/NavLink';
import Yourinvestment from './Yourinvestment';

const Advicetext = ["An App that make your CSS live easier!"];
const Bglink = <NavLink href="https://leonardoas10.github.io/index.html" className="gblink" target="_blank">Try It!</NavLink>

const amount1 = 10422;
const amount2 = 6833;
const sum = (a, b) => `Total: $${a + b}`;
const total = sum(amount1, amount2);    

const Dashboard = () => {
    return (
    <>
    <div className="Container">
        <Advice className="AdviceContainer" title="Background Generator"  description={Advicetext} link={Bglink} footer="By Leonardo AS" />
        <hr className="drawline"></hr>
        <div className="Containerflex">
            <Contentdashboard title="Deposited" amount={5} description="Last Deposit: (...)"/>
            <Contentdashboard title="Balance" amount={7} description="It´s efficient if you invest!"/>
            <Contentdashboard title="Total Earn" amount={2} description="Keep going!" />
        </div>
        <Yourinvestment className="AdviceContainer" title="Your Investments"  subtitle1={"Mency´s and HS"} subtitle2={"Zlatan Invest S.A."} amount1={amount1} amount2={amount2} total={total} />  
    </div>
    </>   
    );
}

export default Dashboard;