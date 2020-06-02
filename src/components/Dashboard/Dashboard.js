import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';

// my components
import Graph from '../Dash-comp/Graph/Graph';
import Table from '../Dash-comp/Table/Table';
import DashNav from '../Dash-comp/DashNav/DashNav';


import './Dashboard.css';

const Dashboard = (props) => {

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
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
        {name: "poop", auctionItem: "lard", event: "corona", price: 80, day: "6/1/20"},
    ];

    const sum = (buyers) => {
        let sums = 0;
        buyers.forEach(b => {
            sums = b.price + sums;
        })
        return sums;
    };

    return (
      <div id="shazam-cont">
        <DashNav user={props.data.user}/>
        <div id="right-cont">
            <div className= "top-header">
                <ul className="inner-top-nav">
                    <li>Sign out</li>
                </ul>
            </div>
            <h1 className="dash-header">{props.data.headerTitle}</h1>
            <Graph data={buyers}/>
            <div className="under-graph">
                <Table buyer = {buyers}/>
                <div className="card-cont">
                    <Card id="cards" style={{ width: '18rem' }}>
                        <Card.Header>Revenue</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Total Revenue: {sum(buyers)}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        
        </div>
      </div>
    );
  
}
  
  export default Dashboard;