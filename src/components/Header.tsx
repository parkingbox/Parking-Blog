import Link from "next/link";
import React from "react";
import DarkModeBtn from "./DarkModeBtn";
import ScrollIndicate from "./ScrollIndicate";

function Header() {
  return (
    <nav className="fixed top-0 w-full dark:bg-neutral-900 bg-[#F7ECDC]">
      <ScrollIndicate />
      <div className="mx-auto my-3 flex h-full w-full max-w-3xl items-center justify-between px-4 ">
        <h1 className="text-3xl font-bold">
          <Link href="/">ParkingBox</Link>
        </h1>
        <div>
          <Link className="mr-10" href="/post">
            post
          </Link>
          <Link href="/about">about</Link>
        </div>
      </div>
      <DarkModeBtn />
    </nav>
  );
}

export default Header;
