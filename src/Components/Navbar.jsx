import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' // 👈 CSS faylga ulaymiz

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/cantact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
