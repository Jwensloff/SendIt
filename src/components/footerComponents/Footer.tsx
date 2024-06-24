import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const sidebarData = [
    { title: "Home", path: "/", className: "footer-nav-text" },
    { title: "About", path: "/about", className: "footer-nav-text" },
    { title: "Weather", path: "/weather", className: "footer-nav-text" },
    { title: "Resorts", path: "/resorts", className: "footer-nav-text" },
    { title: "Products", path: "/products", className: "footer-nav-text" },
    { title: "Favorites", path: "/favorites", className: "footer-nav-text" },
  ];

  return (
    <footer className="footer">
      <ul className="footer-links">
        {sidebarData.map((item, index) => (
          <li key={index} className={item.className}>
            <Link to={item.path}>
              {item.title}
              <span></span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="disclaimer-text-wrapper">
        <p>
          **Disclaimer: SendIt is not responsible for any lost or stolen pow
          turns.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
