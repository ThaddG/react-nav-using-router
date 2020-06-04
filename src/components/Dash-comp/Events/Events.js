import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';

// import Graph from '../Dash-comp/Graph/Graph';
import Table from '../Table/Table';

import './Events.css';

const Events = (props) => {

    return(
        <div className="Event-Container">
            <h4>Event 1</h4>
            <Table buyer={props.data}/>
            <h4 className="event">Event 2</h4>
            <Table buyer={props.data}/>
        </div>
    );

};

export default Events;