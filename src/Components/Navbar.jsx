import React from "react";
import { Link } from "react-router-dom";
import "./index.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/cantact">Contact</Link>
    </nav>
  );
}

export default Navbar;
