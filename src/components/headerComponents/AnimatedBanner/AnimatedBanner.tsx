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
    "Buckle up, buttercup!",
    "Get pitted, stay pitted.",
    "Send it like a daredevil, stick it like glue, and rip it like a rockstar.",
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
    "Carpe freakin diem.",
    "Get hard, stay hard, and remember: if it falls apart, just call it a 'creative adjustment.'",
    "No refunds, no regrets.",
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
