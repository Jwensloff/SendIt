import React, { useEffect, useState } from "react";
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
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/21/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cards = landingPageData.map((item, index) => {
    return (
      <Link to={item.link} key={index} className="home-page-card">
        <img className="icon" src={item.icon} alt={`${item.name} icon`} />
        <p>{item.name}</p>
      </Link>
    );
  });

  return (
    <section className="home-page">
      <div className="background-image">
        <div className="countdown-container">
          <p>Countdown to Winter:</p>
          <div className="timer-wrapper">
            <div>
              <span>{days}</span> <span>Days</span>
            </div>
            <div>
              <span>{hours}</span> <span>Hours</span>
            </div>
            <div>
              <span>{minutes}</span> <span>Minutes</span>
            </div>
            <div>
              <span>{seconds}</span> <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-content">
        <div className="home-page-card-container">{cards}</div>
      </div>
    </section>
  );
};

export default HomePage;
