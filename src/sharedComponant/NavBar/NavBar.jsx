import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBarMain">
      <div className="navBar-container">
        <div className="nav-logo-container">logo</div>
        <div className="nav-link-container">
          <div className="nav-link">
            {" "}
            <Link to="/home">Home</Link>
          </div>
          <div className="nav-link">
            {" "}
            <Link to="/project">Project</Link>
          </div>
          <div className="nav-link">
            <Link to="/blog">Blog</Link>
          </div>
          <div className="nav-link">
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
