import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const menuRef = useRef<HTMLAnchorElement | null>(null);
  const closeButtonRef = useRef<HTMLAnchorElement | null>(null);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    if (sidebar) {
      closeButtonRef.current?.focus();
    } else {
      menuRef.current?.focus();
    }
  }, [sidebar]);

  const sidebarData = [
    { title: "Home", path: "/", className: "nav-text" },
    { title: "About", path: "/about", className: "nav-text" },
    { title: "Contact", path: "/contact", className: "nav-text" },
  ];

  return (
    <>
      <div className="navBar">
        <Link
          ref={menuRef}
          to="#"
          className="menu"
          onClick={showSidebar}
          aria-expanded={sidebar}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
          <span>Menu</span>
        </Link>
      </div>
      <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
        aria-hidden={!sidebar}
      >
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link
              to="#"
              className="exit-btn"
              onClick={showSidebar}
              ref={closeButtonRef}
            >
              <FontAwesomeIcon icon={faXmark} size="1x" />
              <span>Close</span>
            </Link>
          </li>
          {sidebarData.map((item, index) => (
            <li key={index} className={item.className}>
              <Link to={item.path} tabIndex={sidebar ? 0 : -1}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
