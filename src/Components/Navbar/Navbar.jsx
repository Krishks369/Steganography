import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaUserSecret} from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
    return (
        <>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
        <FaUserSecret />
        Steganography
    </a>
    <div class="collapse navbar-collapse" >
      <div class="navbar-nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/decode" className="nav-link">Decode</NavLink>
        <NavLink to="/encode" className="nav-link">Encode</NavLink>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;