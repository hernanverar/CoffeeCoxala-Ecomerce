import React from 'react'
import Logo from '../assets/coxala-pics/Logo.jpeg';
import { Link } from 'react-router-dom';
import "../pages/styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'></div>
      <img src={Logo} alt="Logo of Coxala" />

      <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
      <div className='rightSide'></div>
    </div>
  )
}

export { Navbar };
