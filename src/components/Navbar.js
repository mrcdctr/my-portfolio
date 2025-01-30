import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Bootstrap Navbar */}
      <div className="container">
        <a className="navbar-brand" href="#">My Portfolio</a> {/* Brand name */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;