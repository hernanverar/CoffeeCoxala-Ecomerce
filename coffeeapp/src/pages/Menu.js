import React from "react";
import MenuCoxala from '../assets/coxala-pics/MenuCoxala.jpeg';


function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <img className="menuImage" src={MenuCoxala} alt="Menu of Coffee Coxala" />
      
    </div>
  );
}

export default Menu;
