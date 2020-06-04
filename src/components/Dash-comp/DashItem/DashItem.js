import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';

import Graph from '../Graph/Graph';
import Table from '../Table/Table';

import './DashItem.css';

// used for total revenue
const sum = (buyers) => {
    let sums = 0;
    buyers.forEach(b => {
        sums = b.price + sums;
    })
    return sums;
};


const DashItem = (props) => {

    return(
        <div>
            <Graph data={props.data} />
            <div className="under-graph">
                    <Table buyer = {props.data}/>
                    <div className="card-cont">
                        <Card id="cards" style={{ width: '18rem' }}>
                            <Card.Header>Revenue</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Total Revenue: {sum(props.data)}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>
                </div>
        </div>
    );

};

export default DashItem;