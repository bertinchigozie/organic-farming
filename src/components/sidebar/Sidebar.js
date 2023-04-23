import React from "react";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div>
      <div
        className="sidebar"
        style={{
          transform: props.show ? "translateX(0)" : "translateX(-100%)",
          opacity: props.show ? "1" : "0",
          zIndex: props.show ? "500" : "-500"
        }}
      >
        <ul className="nav-items" onClick={props.closeSide}>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Support
            </a>
          </li>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
