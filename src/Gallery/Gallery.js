import React from 'react';

import './Gallery.css';

const Card = ({ title, description, price }) => (
  <div className="card">
    <h3>{title}</h3>
    <h4>{description}</h4>
    <h5>{price}</h5>
  </div>
);

const Gallery = () => {
  return(
    <div className="Gallery-outer">
      <div className="Gallery-inner">
        <Card title="tidal" description="Just some filler text" price="$400" />
        <Card title="spotify" description="Just some filler text" price="$350" />
        <Card title="apple" description="Just some filler text" price="$240" />
        <Card title="zoom" description="Just some filler text" price="$220" />
        <Card title="amazon" description="Just some filler text" price="$240" />
        <Card title="facebook" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
        <Card title="netflix" description="Just some filler text" price="$240" />
      </div>
    </div>
  )
};

export default Gallery;