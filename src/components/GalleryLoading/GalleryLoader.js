import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./GalleryLoader.css";

const GalleryLoader = ({ value }) => {
  const [loader, setLoader] = useState(true);
  const delay = value * 10;
  const { number } = useSpring({
    from: { number: 0 },
    number: 100,
    delay: delay,
    config: { mass: 1, tension: 20, friction: 10 },
    onStart: () => {
      setLoader(true);
      document.body.classList.add("no-scroll");
    },
    onRest: () => {
      if (value >= 31) {
        setLoader(false);
        document.body.classList.remove("no-scroll");
      }
    },
  });

  return (
    <div>
      <div className={` ${loader ? "load_Container" : "slideOut"}`}>
        <p className="counter">
          <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>{" "}
          <span>%</span>
        </p>
      </div>
    </div>
  );
};

export default GalleryLoader;
