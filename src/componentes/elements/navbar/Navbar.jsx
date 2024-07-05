import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
      </div>
    </div>
  )
}

export default Navbar