import React from "react";
import { Link } from "react-router-dom";
import "./Feature.css";
import { IoSearchOutline } from "react-icons/io5";
import img1 from "../../images/image-1.png";
import img2 from "../../images/image-2.png";
import img3 from "../../images/image-3.png";
import img4 from "../../images/image-4.png";
import img5 from "../../images/image-5.png";
import img6 from "../../images/image-6.png";

function Feature() {
  return (
    <div className="feature-box">
      <div className="feature">
        <div className="feature-1">
          <div className="search-box">
            <input type="text" placeholder="Search" className="search-bar" />
            <IoSearchOutline className="search-icon" />
          </div>
          <div className="box-shadow">
            <p className="feature-heading">Categories</p>
            <ul className="categories-lists">
              <li>Automation</li>
              <li>IoT</li>
              <li>Precision Agriculture</li>
              <li>Sustainable Farming</li>
              <li>Industry News</li>
              <li>Case Studies</li>
              <li>Tips & Tricks</li>
            </ul>
          </div>
          <div className="box-shadow">
            <p className="feature-heading">Top Posts</p>
            <ul className="top-lists">
              <li className="top-list">
                <span>1</span>
                <div className="top-list__item">
                  <p>How Regenerative Agriculture is Changing the Game</p>
                  <p>Sustainable Farming - March, 2022</p>
                </div>
              </li>
              <li className="top-list">
                <span>2</span>
                <div className="top-list__item">
                  <p>
                    Precision Agriculture 2.0: Using Artificial Intelligence to
                    Optimize Crop Yields
                  </p>
                  <p>Precision Agriculture - September 2021</p>
                </div>
              </li>
              <li className="top-list">
                <span>3</span>
                <div className="top-list__item">
                  <p>
                    Breaking Ground: How Automation is Revolutionizing the
                    Agriculture Industry
                  </p>
                  <p>Industry News - May 2022</p>
                </div>
              </li>
              <li className="top-list">
                <span>4</span>
                <div className="top-list__item">
                  <p>
                    How Ouranos Robotics' Smart Sensors are Transforming Crop
                    Management
                  </p>
                  <p> IoT - July 2021</p>
                </div>
              </li>
              <li className="top-list">
                <span>5</span>
                <div className="top-list__item">
                  <p>The Impact of Technology on the Agriculture Industry</p>
                  <p>Expert Insights - November 2021</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="feature-2">
          <div className="card">
            <img src={img1} alt="" className="img" />
            <div className="card-description">
              <p className="card-date">Sustainable Farming - April 2023</p>
              <p className="card-heading">
                Organic Farming: How It Can Help Save the Planet
              </p>
              <p className="card-paragraph">
                Learn about the benefits of organic farming and how it can help
                reduce the environmental impact of agriculture.
              </p>
              <Link className="link-card" to="organic-farming">
                Read Full Article
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={img2} alt="" className="img" />
            <div className="card-description">
              <p className="card-date"> IoT - April 2023</p>
              <p className="card-heading">
                The Internet of Things and Precision Agriculture: A Match Made
                in Heaven
              </p>
              <p className="card-paragraph">
                Discover how IoT devices are transforming precision agriculture,
                from soil moisture sensors to drones.
              </p>
              <Link className="link-card" to="organic-farming-idea2">
                Read Full Article
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={img3} alt="" className="img" />
            <div className="card-description">
              <p className="card-date">Automation - March 2023</p>
              <p className="card-heading">
                5 Ways to Optimize Your Crop Yields with Automation
              </p>
              <p className="card-paragraph">
                Find out how automation can increase productivity on the farm,
                and learn about the latest tools and technologies.
              </p>
              <Link className="link-card" to="/full-Article">
                Read Full Article
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={img4} alt="" className="img" />
            <div className="card-description">
              <p className="card-date">Sustainable Farming - February 2023</p>
              <p className="card-heading">
                The Business Case for Sustainable Farming: Why it Makes
                Financial Sense
              </p>
              <p className="card-paragraph">
                Explore the economic benefits of sustainable farming practices,
                from reduced input costs.
              </p>
              <Link className="link-card" to="/full-Article">
                Read Full Article
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={img5} alt="" className="img" />
            <div className="card-description">
              <p className="card-date">Expert Insights - February 2023</p>
              <p className="card-heading">
                Expert Insights: The coming future of Agri-Tech
              </p>
              <p className="card-paragraph">
                Hear from top experts in the field about the latest trends and
                technologies shaping the future of Agri-tech.
              </p>
              <Link className="link-card" to="/full-Article">
                Read Full Article
              </Link>
            </div>
          </div>
          <div className="card">
            <img src={img6} alt="" className="img" />
            <div className="card-description">
              <p className="card-date">Precision Agriculture - January 2023</p>
              <p className="card-heading">
                Maximizing Crop Yields with Precision Planting
              </p>
              <p className="card-paragraph">
                Discover how precision planting can help farmers maximize their
                crop yields while reducing waste and costs.
              </p>
              <Link className="link-card" to="/full-Article">
                Read Full Article
              </Link>
            </div>
          </div>
          <div className="pagination">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
