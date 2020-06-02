import React from 'react';
import { Button, Jumbotron, Card } from 'react-bootstrap';
import './Main.css';

const Main = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Jumbotron>
        <h1>ShaZam</h1>
        <p>
          simple hero
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="primary">Primary</Button>{'Yolo'}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Main;