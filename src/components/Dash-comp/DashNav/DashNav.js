import React, { useState, useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';
import {
    NavLink
  } from "react-router-dom";

import './DashNav.css';

const DashNav = (props) => {

    const nItem = (person, index) => {
        return (
            <li>
                <i class="fas fa-home"></i>
                <a href="#">Dashboard</a>
            </li>
        );
    }
    


    return(
        <div id = "nav">
            <div id="logo">{props.user}</div>
            <div className="search-cont">
                <input type="text" className="nav-search" placeholder="search"></input>
            </div>
            <div className ="nav-options">
                <ul>
                    <NavLink to="/Dashboard?q=Dashboard">
                        <li>
                            <i className="fas fa-home"></i>
                            <a href="#">Dashboard</a>
                        </li>
                    </NavLink>
                    <NavLink to="/Dashboard?q=Events">
                    <li>
                        <i className="fas fa-dollar-sign"></i>
                        <a href="#">Events</a>
                    </li>
                    </NavLink>
                    <li>
                        <i className="far fa-lemon"></i>
                        <a href="#">Orders</a>
                    </li>
                </ul>
            </div>
        </div>
    );
} 


export default DashNav;