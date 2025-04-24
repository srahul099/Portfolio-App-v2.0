"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  const current_path = usePathname();
  const router = useRouter();
  const handleClick = (path) => () => {
    router.push(path);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 500);
  };
  return (
    <div className="h-full sticky top-0 bg-background z-10">
      <div className="hidden md:flex flex-row justify-center items-center p-6 space-x-15 bg-background">
        {navItems.map((menu, index) => (
          <div
            key={index}
            onClick={handleClick(menu.path)}
            className={`items-center flex flex-col cursor-pointer  ${
              menu.path == current_path ? "text-accent" : "text-white"
            }`}
          >
            {menu.name}
          </div>
        ))}
      </div>
      <div className="md:hidden fixed top-4 right-4 z-50 p=2 bg-background rounded-xl">
        <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          color="var(--accent)"
        />
      </div>
      <div
        className={`fixed top-0 left-0 mb-3 mt-3 h-[calc(100dvh-24px)]  w-[70%] bg-[var(--carrousal-gray)] text-white transform ${
          isMenuOpen
            ? "translate-x-0 ml-3 rounded-2xl"
            : "-translate-x-full rounded-lg"
        } transition-transform duration-300 ease-in-out z-10`}
      >
        <div className="flex flex-col space-y-3 mt-16 p-4">
          {navItems.map((menu, index) => (
            <div
              key={index}
              onClick={handleClick(menu.path)}
              className={`cursor-pointer  ${
                menu.path == current_path
                  ? "bg-accent text-background px-4 py-2 rounded-xl text-xl font-semibold "
                  : "text-white px-4 py-2"
              } transition-all duration-300 ease-in-out`}
            >
              {menu.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
