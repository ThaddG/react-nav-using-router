import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';

import './DashNav.css';

const DashNav = (props) => {



    return(
        <div id = "nav">
            <div id="logo">{props.user}</div>
            <div className="search-cont">
                <input type="text" className="nav-search" placeholder="search"></input>
            </div>
            <div class ="nav-options">
                <ul>
                    <li>
                        <i class="fas fa-home"></i>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <i class="fas fa-dollar-sign"></i>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <i class="far fa-lemon"></i>
                        <a href="#">Orders</a>
                    </li>
                </ul>
            </div>
        </div>
    );
} 


export default DashNav;