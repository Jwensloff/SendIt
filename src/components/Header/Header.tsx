import React from "react";
import "./Header.scss";
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header className="header">
      <AnimatedBanner />
      <div className="inner-header-content">
        <button className="menu">
          <FontAwesomeIcon icon={faBars} size="3x" />
          <span>Menu</span>
        </button>
        <h1>SendIt</h1>
        <p>search</p>
      </div>
    </header>
  );
};

export default Header;
