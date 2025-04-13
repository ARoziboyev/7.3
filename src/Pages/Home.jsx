import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page2">
      <Link to="/cantact" className="card">
        <h2>Welcome!</h2>
        <p>This is the Home page. Click me to go to Product page!</p>
      </Link>
    </div>
  );
}

export default Home;
