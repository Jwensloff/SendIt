import React, { useState } from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const sidebarData = [
    { title: "Home", path: "/", className: "nav-text" },
    { title: "Home", path: "/", className: "nav-text" },
    { title: "Home", path: "/", className: "nav-text" },
  ];

  return (
    <>
      <div className="navBar">
        <Link to="#" className="menu" onClick={showSidebar}>
            <FontAwesomeIcon icon={faBars} size="2x" />
            <span>Menu</span>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navebar-toggle">
            <Link to="#" className="exit-btn" onClick={showSidebar}>
              <FontAwesomeIcon icon={faXmark} size="1x"  />
              <span>Close</span>
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
