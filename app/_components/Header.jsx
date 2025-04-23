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
  };
  return (
    <div>
      <div className="hidden md:flex flex-row justify-center items-center p-6 space-x-15 ">
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
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-accent text-white transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col space-y-6 mt-16 p-4">
          {navItems.map((menu, index) => (
            <div
              key={index}
              onClick={handleClick(menu.path)}
              className={`cursor-pointer ${
                menu.path == current_path ? "text-accent" : "text-white"
              }`}
            >
              {menu.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
