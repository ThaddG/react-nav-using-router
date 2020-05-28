import React, { useState } from 'react';

import './Gallery.css';

const Card = ({ title, description, price }) => (
  <div className="card">
    <h3>{title}</h3>
    <h4>{description}</h4>
    <h5>{price}</h5>
  </div>
);

const Gallery = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems(items.concat(item));
  }

  return(
    <div className="Gallery-outer">
      <div className="Gallery-inner">
        <Card title="tidal" description="No flex-hate here" price="$400" />
        <Card title="spotify" description="No grid-hate here" price="$350" />
        <Card title="apple" description="No boob-hate here" price="$240" />
        <Card title="zoom" description="No china-hate here" price="$220" />
        <Card title="apple" description="No boob-hate here" price="$240" />
        <Card title="apple" description="No boob-hate here" price="$240" />
        <Card title="apple" description="No boob-hate here" price="$240" />
      </div>

      {/* <button className="add-card-button" onClick={addItem}>Clicc me</button> */}
    </div>
    
  )
};

export default Gallery;