"use client";

import React from "react";
import DarkModeBtn from "./DarkModeBtn";
import ScrollIndicate from "./ScrollIndicate";
import SideNavIntro from "../app/_components/SideNavIntro";

function Header() {
  return (
    <nav className="fixed top-0 overflow-x-hidden left-0 w-screen z-[99] overflow-y-hidden shadow-transparent transition ease-in-out delay-150">
      <ScrollIndicate />
      <div className="flex mx-auto flex-wrap h-20 dark:bg-custom-black bg-neutral-100 border-b border-b-gray-700  w-full justify-center px-4 ">
        <SideNavIntro />
      </div>
      <DarkModeBtn />
    </nav>
  );
}

export default Header;
