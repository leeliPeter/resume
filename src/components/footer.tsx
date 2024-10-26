import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-black py-12">
      <div className="max-w-6xl mx-auto flex md:px-4 flex-col md:flex-row items-center md:justify-between">
        <div className="flex flex-col md:justify-start space-y-8">
          <div className="text-2xl font-bold text-white">
            <Link href="/">Assignment1</Link>
          </div>
          <ul className="flex flex-col space-y-4 items-center md:flex-row md:space-y-0 md:space-x-8 md:justify-start">
            <li className="group h-10">
              <Link className="text-white font-bold" href="/education">
                Education
              </Link>
              <div className="group-hover:border-b-2 mx-2 duration-200 mt-1 border-white"></div>
            </li>
            <li className="group h-10">
              <Link className="text-white font-bold" href="/experience">
                Experience
              </Link>
              <div className="group-hover:border-b-2 mx-2 duration-200 mt-1 border-white"></div>
            </li>
            <li className="group h-10">
              <Link className="text-white font-bold" href="/overview">
                Overview
              </Link>
              <div className="group-hover:border-b-2 mx-2 duration-200 mt-1 border-white"></div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:justify-end mt-6 md:mt-0 space-y-6">
          <p className="text-gray-500 font-bold text-center">
            © 2024 Peterstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
