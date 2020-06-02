import React, { useState, useEffect } from 'react';
import { Button, Card, Table, ListGroup } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';

import './Table.css';


const MainTable = (props) => {

    // [tableData, setTableData] = useState();
    
    const renderBuyers = (person, index) => {
        return (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{person.name}</td>
            <td>{person.auctionItem}</td>
            <td>{person.event}</td>
            <td>{person.price}</td>
          </tr>
        )
      }

      useEffect(()=> {
        // renderPerson();
      }, []);


    return(
        <Table id="table-cont" responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>Buyer Name</th>
                <th>Auction Item</th>
                <th>Event</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.buyer.map(renderBuyers)}
            </tbody>
        </Table>
    );
}


export default MainTable;