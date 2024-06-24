import React from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  const landingPageData = [
    {
      name: "Resorts",
      icon: "assets/photos/ski-lift.png",
      link: "/resorts",
    },
    {
      name: "Weather",
      icon: "assets/photos/weather.png",
      link: "weather",
    },
    {
      name: "Products",
      icon: "assets/photos/ski-goggles.png",
      link: "/products",
    },
    {
      name: "Fan Favorites",
      icon: "assets/photos/star.png",
      link: "favorites",
    },
  ];

  const cards = landingPageData.map((item, index) => {
    return (
      <Link to={item.link} key={index} className="home-page-card">
        <div className="card-img">
          <img className="icon" src={item.icon} alt={`${item.name} icon`} />
        </div>
        <p>{item.name}</p>
      </Link>
    );
  });

  return (
    <section className="home-page">
      <div className="background-image">
        <p>Countdown to Winter:</p>
      </div>
      <div className="home-page-card-container">{cards}</div>
    </section>
  );
};

export default HomePage;
