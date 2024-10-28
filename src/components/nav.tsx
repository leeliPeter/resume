"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  url: string;
}

export default function Nav(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links: NavLink[] = [
    {
      name: "Education",
      url: "/education",
    },
    {
      name: "Experience",
      url: "/experience",
    },
    {
      name: "Overview",
      url: "/overview",
    },
  ];
  return (
    <div className="flex justify-between pt-2 items-center px-4 text-white">
      <div className="text-4xl font-bold">
        <Link href="/">Peter Tam</Link>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden justify-between gap-8 md:flex">
        {links.map((item) => (
          <li key={item.name} className="group h-16 font-semibold mt-7">
            <Link href={item.url}>
              <div className="pb-2"> {item.name}</div>
            </Link>
            <div
              className={`border-white mx-2 ${
                pathname === item.url ? "border-b-2" : "group-hover:border-b-2"
              }`}
            ></div>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={toggleMenu}
          className="z-40 block hamburger focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`hamburger-top ${isMenuOpen ? "open" : ""}`}></span>
          <span
            className={`hamburger-middle ${isMenuOpen ? "open" : ""}`}
          ></span>
          <span
            className={`hamburger-bottom ${isMenuOpen ? "open" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute md:hidden overflow-hidden bg-gradient-to-br from-black via-gray-700 to-gray-50  top-0 left-0 right-0 transition-all duration-600 ease-in-out ${
          isMenuOpen ? "h-[330px]" : "h-0"
        }`}
      >
        <ul className="flex flex-col pl-14 pt-20 space-y-4 w-full">
          {links.map((item) => (
            <li key={item.name}>
              <Link
                href={item.url}
                className="uppercase text-xl text-white hover:text-pink-500 cursor-pointer block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
