import React from "react";
import "./Header.scss";
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";
import Navbar from "../NavBar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <AnimatedBanner />
      <div className="inner-header-content">
        <Navbar />
        <h1>SendIt</h1>
      </div>
    </header>
  );
};

export default Header;
