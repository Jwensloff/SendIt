import React from "react";
import "./Header.scss";
import AnimatedBanner from "../AnimatedBanner/AnimatedBanner";
const Header = () => {
  return (
    <header className="header">
      <AnimatedBanner />
      <div>
        main content
        <button>Menu</button>
      </div>
    </header>
  );
};

export default Header;
