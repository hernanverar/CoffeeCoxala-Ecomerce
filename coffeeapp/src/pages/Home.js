import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bagels from "../assets/coxala-pics/Bagels.jpeg";
import Salad from "../assets/coxala-pics/Salad.jpeg";
import Expresso from "../assets/coxala-pics/Expresso.jpeg";
import cookieDrink from "../assets/coxala-pics/cookieDrink.jpeg";
import GingerBeer from "../assets/coxala-pics/GingerBeer.jpeg";
import MenuCoxala from "../assets/coxala-pics/MenuCoxala.jpeg";
import Flan from "../assets/coxala-pics/Flan.jpeg";
import { Link } from "react-router-dom";
import "../pages/styles/Home.css"

function Home() {
  const sliderRef = useRef(null);

  const goToHours = () => {
    sliderRef.current.slickGoTo(0); // Go to the index of the "Hours" image
  };

  const settings = {
    infinite: true,
    dots: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Welcome to Coffee Coxala!</h1>
        <Link to="/menu">
          <button className="redirect" onClick={goToHours}>
            check our full Menu
          </button>
        </Link>
        

        <Slider ref={sliderRef} {...settings}>
        <img src={MenuCoxala} alt="Menu of Coxala" className="menu-img" />
          <img src={Bagels} alt="Bagels" />
          <img src={cookieDrink} alt="cookieDrink" />
          <img src={GingerBeer} alt="GingerBeer" />
          <img src={Expresso} alt="Expresso" />
          <img src={Salad} alt="Salad" />
          <img src={Flan} alt="Flan" />
        </Slider>
      </div>
    </div>
  );
}

export default Home;
