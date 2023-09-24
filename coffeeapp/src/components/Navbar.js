import React from 'react'
import Logo from '../assets/coxala-pics/Logo.jpeg';
import { Link } from 'react-router-dom';
import "../pages/styles/Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'></div>
      <img src={Logo} alt="Logo of Coxala" />
      <div className='rightSide'></div>
      <Link to="/"> Home </Link>
      <Link to="/"> Menu </Link>
      <Link to="/"> About </Link>
      <Link to="/"> Contact </Link>
    </div>
  )
}

export { Navbar };
