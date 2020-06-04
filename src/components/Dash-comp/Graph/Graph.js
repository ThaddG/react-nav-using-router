import React, { useState, useEffect } from 'react';
import { Button, Card, Table, ListGroup } from 'react-bootstrap';
import {Line, Bar} from 'react-chartjs-2';

import './Graph.css';

const Graph = (props) => {

    const [chartData, setChartData] = useState({});

    // let prices = [];
    // let labels = [];

    // const handleData = (data) => {
    //     var days = {};
    //     data.forEach(e => {
    //         if () {

    //         }
    //         prices.push(e.price);
    //         labels.push(e.day);
    //     });
    //     return ({prices,labels});
    // };

    const data = [
        // {day: "6/1", quantity: 3},
        {day: "6/1", quantity: 4},
        {day: "6/2", quantity: 2},
        {day: "6/3", quantity: 4},
        {day: "6/4", quantity: 3},
        {day: "6/5", quantity: 5},
        {day: "6/6", quantity: 6},
        {day: "6/7", quantity: 8},
        {day: "6/8", quantity: 4},
    ];

    const days = data.map(item => {
        return item.day;
    })
    const quantities = data.map(item => {
        return item.quantity;
    })
    
    // for graph
    const chart = () => {
        setChartData({
            labels: days,
            datasets: [{
                label: 'sold',
                fill: false,
                backgroundColor: '#E6EBE0',
                borderColor: '#9BC1BC',
                borderWidth: 1,
                data: [...quantities],
                // TODO: basedata, look this up
            }]
        });

    };

    useEffect(() => {
        chart();
    }, []);


    return (
        <div className="Graph">
                <Bar id="graph-inside" data={chartData} options={{
                    responsive: true,
                    title: {text: 'Amount Sold'},
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}/>
        </div> 
    );
}


export default Graph;