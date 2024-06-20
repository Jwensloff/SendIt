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
    "Go big or go home.",
    "Ride the wave.",
    "Eat, sleep, shred, repeat.",
    "Live to ride, ride to live.",
    "No guts, no glory.",
    "Risk it for the biscuit.",
    "Carpe freakin diem",
  ];

  return (
    <div className={animate ? "animate-scroller scroller" : "scroller"}>
      <ul className="text-list scroller_inner">
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
