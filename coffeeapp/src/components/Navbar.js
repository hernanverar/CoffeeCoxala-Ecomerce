
import React, { useContext } from 'react';
import Logo from '../assets/coxala-pics/Logo.jpeg';
import { LanguageContext } from "../components/LanguageContext";
import { Link } from 'react-router-dom';

import "../pages/styles/Navbar.css";

const Navbar = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <div className='navbar'>
      <button onClick={toggleLanguage}>change Language</button>
      <div className='leftSide'></div>
      <img src={Logo} alt="Logo of Coxala" />
      <Link to="/"> Home </Link>
      <Link to="/menu"> Menu </Link>
      <Link to="/about"> About </Link>
      <Link to="/contact"> Contact </Link>
      <Link to="/crud"> Order Here </Link>
      <div className='rightSide'></div>
    </div>
  );
}

export default Navbar;
