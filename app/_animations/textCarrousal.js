"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TextCarrousal({ text, direction }) {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    const s1 = slider1.current;
    const s2 = slider2.current;
    const width = s1.scrollWidth;

    // Set initial positions
    gsap.set(s1, { x: direction === "+" ? -width : 0 });
    gsap.set(s2, { x: direction === "+" ? -width : width });

    // Infinite loop animation
    gsap.to([s1, s2], {
      x: `${direction}=${width}`,
      duration: 40,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % width}px`,
      },
    });
  }, []);

  const renderTextBlock = () => (
    <>
      <p className="mx-8 text-[200px] text-[var(--carrousal-gray)] font-organetto font-bold text-outline">
        {text}
      </p>
      <p className="mx-8 text-[200px] font-organetto text-[var(--carrousal-gray)] font-bold">
        {text}
      </p>
      <p className="mx-8 text-[200px] font-bold font-organetto text-[var(--carrousal-gray)]">
        {text}
      </p>
      <p className="mx-8 text-[200px] font-bold font-organetto text-[var(--carrousal-gray)]">
        {text}
      </p>
    </>
  );

  return (
    <div className="w-full overflow-hidden text-outline">
      <div className="flex whitespace-nowrap">
        {direction === "+" ? (
          <>
            <div ref={slider2} className="flex">
              {renderTextBlock()}
            </div>
            <div ref={slider1} className="flex">
              {renderTextBlock()}
            </div>
          </>
        ) : (
          <>
            <div ref={slider1} className="flex">
              {renderTextBlock()}
            </div>
            <div ref={slider2} className="flex">
              {renderTextBlock()}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
