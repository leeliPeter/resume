import React from "react";
import Nav from "./nav";

export default function header() {
  return (
    <header>
      <div className="container max-w-6xl mx-auto">
        <Nav />
        <div className="border-2 text-4xl p-10 mt-10 mb-14 ml-10 border-white max-w-xs inline-block">
          <div className="text-white font-bold md:text-5xl leading-[1.3]">
            IT IS ALL ABOUT ME
          </div>
        </div>
      </div>
    </header>
  );
}
