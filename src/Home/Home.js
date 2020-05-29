import React from 'react';

import './Home.css';
import Gallery from '../Gallery/Gallery';

const Home = () => (
  <div className="Home">
    <div className="jumbotron">
      <h2>Raffles and Auctions</h2>
      <button>Call to action</button>
    </div>
    <Gallery />
  </div>
);

export default Home;