import React from 'react';
import { Link } from 'react-router-dom';

function Abaut() {
  return (
    <div className="page2">
      <Link to="/cantact" className="card">
        <h2>About Us</h2>
        <p>This is the Abaut page. Click me to go to Product page!</p>
      </Link>
    </div>
  );
}

export default Abaut;
