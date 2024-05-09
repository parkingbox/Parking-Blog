import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

function MobileNav() {
  return (
    <div className="lg:hidden h-20 w-full px-4 bg-neutral-100 flex items-center justify-between">
      <h1 className="text-3xl font-bold">
        <Link href="/">ParkingBox</Link>
      </h1>
      <div className="gap-2 flex">
        <div className="cursor-pointer">
          <a href="https://github.com/parkingbox" target="_blank">
            <AiFillGithub size={25} />
          </a>
        </div>
        <div className="cursor-pointer">
          <Link href="/about">
            <VscAccount size={25} />
          </Link>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => window.open("mailto:qpfgud430@gmail.com")}
        >
          <AiOutlineMail size={25} />
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
