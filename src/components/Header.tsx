import Link from "next/link";
import React from "react";
import DarkModeBtn from "./DarkModeBtn";

function Header() {
  return (
    <nav className="mt-10 h-14 w-full">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between px-4 py-4">
        <h1 className="text-3xl font-bold">
          <Link href="/">ParkingBox</Link>
        </h1>
        <ul className="flex items-center gap-3 ">
          <Link href="/post">post</Link>
          <Link href="/about">about</Link>
          <DarkModeBtn />

        </ul>
      </div>
    </nav>
  );
}

export default Header;
