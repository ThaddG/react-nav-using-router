import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';



const App = () => {

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>

    <Gallery />
  </div>
)

export default App;
