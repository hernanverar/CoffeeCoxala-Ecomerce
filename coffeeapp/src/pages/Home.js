import React from "react";
import Bagels from "../assets/coxala-pics/Bagels.jpeg";
import cookieDrink from "../assets/coxala-pics/cookieDrink.jpeg";
import GingerBeer from "../assets/coxala-pics/GingerBeer.jpeg";
import { Link } from "react-router-dom";
import "../pages/styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Welcome to Coffee Coxala!</h1>
        <div className="grid-container">
          <img src={Bagels} alt="Bagels" />
          <img src={cookieDrink} alt="cookieDrink" />
          <img src={GingerBeer} alt="GingerBeer" />
        </div>
        <Link to="/menu">
          <button>check out our Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
