"use client";

import Link from "next/link";
import React from "react";
import DarkModeBtn from "./DarkModeBtn";
import ScrollIndicate from "./ScrollIndicate";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import SideNavIntro from "../app/_components/SideNavIntro";
import SideList from "../app/_components/SideList";

function Header() {
  return (
    <nav className="fixed top-0 h-full overflow-x-hidden left-0 w-[220px] z-[99] overflow-y-hidden shadow-md transition-all duration-500">
      <ScrollIndicate />
      <div className=" mx-auto flex flex-wrap h-full w-full max-w-3xl items-center justify-center px-4 ">
        <SideNavIntro />
        <SideList />
      </div>
      <DarkModeBtn />
    </nav>
  );
}

export default Header;
