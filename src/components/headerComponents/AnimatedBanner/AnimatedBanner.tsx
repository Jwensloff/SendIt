import React, { useEffect, useState } from "react";
import "./AnimatedBanner.scss";
const AnimatedBanner = () => {
  let [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAnimate(true);
    }
  }, []);

  let listText = [
    "Get pitted, stay pitted.",
    "No Pain, no gain.",
    "Grip it and rip it.",
    "Shred the gnar.",
    "Live fast, die young.",
    "Safety third.",
    "Risk it for the glory.",
    "Go big or go home.",
    "Ride the wave.",
    "Eat, sleep, shred, repeat.",
    "Live to ride, ride to live.",
    "No guts, no glory.",
    "Carpe freakin diem",
  ];

  return (
    <div className="scroller">
      <ul className={animate ? "animate-text text" : "text"}>

        {listText.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {listText.map((item, index) => (
          <li key={`clone-${index}`} aria-hidden={true}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedBanner;
