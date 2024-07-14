import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./loader.css";

const Loader = () => {
  const [fontload, setFontload] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    document.fonts.onloadingdone = () => {
      setFontload(true);
    };
  }, []);

  const { number } = useSpring({
    from: { number: 0 },
    number: 100,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
    onStart: () => {
      setLoader(true);
      document.body.classList.add("no-scroll");
    },
    onRest: () => {
      setLoader(false);
      document.body.classList.remove("no-scroll");
    },
  });

  return (
    <div>
      <div className={`load_Container ${loader ? "" : "slideOut"}`}>
        {fontload === false && <h2 className="loading_Text">Loading</h2>}
        {fontload && (
          <p className="counter">
            <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>{" "}
            <span>%</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Loader;
