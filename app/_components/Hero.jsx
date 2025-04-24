import { FlipWords } from "@/components/ui/flip-words";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TextCarrousal from "../_animations/textCarrousal";

export default function Hero() {
  const words = [
    "Software Test Engineer at Visa",
    "SRMIST 25",
    "Tech Enthusiast",
  ];
  return (
    <div className="flex flex-col justify-center items-center h-[100dvh] md:h-[calc(100vh-100px)] select-none mb-10">
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-10 z-[-1] opacity-40">
        <div className="relative w-full">
          <TextCarrousal text="SOFTWARE TEST ENGINEER" direction={"-"} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--background), rgba(0, 0, 0, 0), var(--background))",
            }}
          ></div>
        </div>
        <div className="relative w-full">
          <TextCarrousal text="UI/UX FRONTEND DEVELOPER" direction={"+"} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, var(--background), rgba(0, 0, 0, 0), var(--background))",
            }}
          ></div>
        </div>
      </div>
      <p className="leading-tight text-2xl md:text-3xl mb-3 text-accent z-1">
        Hey there, I'm
      </p>
      <h1 className="font-[humane] font-bold text-[20rem] md:text-[25rem] leading-[0.85] text-center text-accent z-1">
        RAHUL
      </h1>
      <div className="text-xl relative top-[-30px] w-full text-center">
        <FlipWords words={words} className={"text-2xl md:text-3xl"} />
      </div>
      <div className="flex flex-row justify-center items-center space-x-4  relative top-[-10px]">
        <a
          href="https://www.linkedin.com/in/rahuls2109/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="var(--accent)"
            className="text-[45px]"
          />
        </a>
        <a href="https://github.com/srahul099" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-[45px]"
            color="var(--accent)"
          />
        </a>
      </div>
    </div>
  );
}
