import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';
import {
    useLocation
  } from "react-router-dom";

// my components
import Graph from '../Dash-comp/Graph/Graph';
import Table from '../Dash-comp/Table/Table';
import DashNav from '../Dash-comp/DashNav/DashNav';
import DashItem from '../Dash-comp/DashItem/DashItem';
import Events from '../Dash-comp/Events/Events';

// import Events from '../Dash-comp/Dash/Da';
import TBD from '../Dash-comp/OrderTBD/TBD';

import './Dashboard.css';

const Dashboard = (props) => {

    const [openEvent, setOpenEvent] = useState('Dashboard');


    const params = new URLSearchParams(useLocation().search);
        console.log('a', useLocation().search);
 

    useEffect(() => {
        const q = params.get("q");
        console.log('ll',q);
        setOpenEvent(q ? q : 'Dashboard');
        // renderSwitch(q);
        console.log('yee', openEvent)
    }, [params, openEvent]);

    // navbar items
    const navItems = ["Dashboard", "Events"];

    const buyers = [
        {name: "yolo", auctionItem: "pillows", event: "corona", price: 3.57, day: "Monday"},
        {name: "nolo", auctionItem: "dirt", event: "corona", price: 45.00, day: "Tuesday"},
        {name: "dolo", auctionItem: "pillows", event: "corona", price: 10.57, day: "Wednesday"},
        {name: "tolo", auctionItem: "shirts", event: "corona", price: 14.54, day: "Friday"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 10, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
    ];


    const renderSwitch = (x) => {
        console.log('yolo',x);
        switch(x) {
            case 'Dashboard':
                return (<DashItem data={buyers}/>);
                break;
            case 'Events':
                return (<Events data={buyers}/>);
                break;
            case 'Orders':
                return (<TBD/>)
                break;
            default:
                break;
        }
    };

    return (
      <div id="shazam-cont">
        <DashNav user={props.data.user} navBarItems={navItems}/>
        {/* <Router>
            <Switch>
    <Route exact path="/Events" component={Events}></Route>
            </Switch>
        </Router> */}
        <div id="right-cont">
            <div className= "top-header">
                <ul className="inner-top-nav">
                    <li>Sign out</li>
                </ul>
            </div>
            <h1 className="dash-header">{openEvent}</h1>
            {renderSwitch(openEvent)} {/* Handles on click of a nav item */}
            
        
        </div>
      </div>
    );
  
}
  
  export default Dashboard;