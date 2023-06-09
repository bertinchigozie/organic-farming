import React from "react";
import "./Hero.css";
import Navigation from "../navigation/Navigation";
function Hero() {
  return (
    <div>
      <header className="header">
        <Navigation />
        <div className="heading-box">
          <div className="primary-heading">
            <p>Transforming Agriculture with Technology</p>
          </div>
          <div className="secondary-heading">
            <p>
              Revolutionizing Agriculture through Innovation: Explore the Latest
              Trends and Technologies in Agri-Tech with Ouranos Robotics'
              Leading Blog{" "}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
