"use client";

import React from "react";
import DarkModeBtn from "./DarkModeBtn";
import ScrollIndicate from "./ScrollIndicate";
import SideNavIntro from "../app/_components/SideNavIntro";
import SideList from "../app/_components/SideList";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <nav className="fixed top-0 h-full overflow-x-hidden left-0 w-full lg:w-[220px] z-[99] overflow-y-hidden shadow-transparent lg:shadow-md transition ease-in-out delay-150">
      <ScrollIndicate />
      <div className="lg:flex hidden mx-auto flex-wrap h-full w-full max-w-3xl items-center justify-center px-4 ">
        <SideNavIntro />
        <SideList />
      </div>
      <MobileNav />
      <DarkModeBtn />
    </nav>
  );
}

export default Header;
