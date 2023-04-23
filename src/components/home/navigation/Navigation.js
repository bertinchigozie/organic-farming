import React from "react";
import { useState } from "react";
import "./Navigation.css";
import { IoMenuOutline } from "react-icons/io5";
import Sidebar from "../../sidebar/Sidebar";

function Navigation() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="header">
      <Sidebar show={sidebar} closeSide={showSidebar} />;
      <nav className="nav-container">
        <div className="nav">
          <div>
            <img
              className="logo"
              src="https://ouranosrobotics.com/static/media/logo-white-1.7813115f65d49d150b9620100e31292e.svg"
              alt=""
            />
          </div>
          <div className="navLinks-container">
            <ul className="nav-links">
              <li>
                <a className="link" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className="link" href="/product">
                  Product
                </a>
              </li>
              <li>
                <a className="link" href="/About">
                  About Us
                </a>
              </li>
              <li>
                <a className="link" href="#support">
                  Support
                </a>
              </li>
              <li>
                <a className="link" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="btn">
            <button className="nav-btn"> Buy Now</button>
          </div>
          <div>
            <IoMenuOutline className="nav-icon" onClick={showSidebar} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
