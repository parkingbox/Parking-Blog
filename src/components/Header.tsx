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
