import React from "react";
import "./Header.scss";
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../NavBar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <AnimatedBanner />
      <div className="inner-header-content">
        {/* <button className="menu">
          <FontAwesomeIcon icon={faBars} size="2x" />
          <span>Menu</span>
        </button> */}
        <Navbar />
        <h1>SendIt</h1>
        <button className="search-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
          <p>Search</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
