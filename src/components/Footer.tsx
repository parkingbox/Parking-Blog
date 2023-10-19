"use client";

import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-20 ">
      <div className="flex gap-5 mb-2">
        <div className="cursor-pointer">
          <a href="https://github.com/parkingbox" target="_blank">
            <AiFillGithub size={25} />
          </a>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => window.open("mailto:qpfgud430@gmail.com")}
        >
          <AiOutlineMail size={25} />
        </div>
      </div>
      <div>
        © {new Date().getFullYear()}
        &nbsp;parkseungwoo all rights reserved.
      </div>
    </div>
  );
}

export default Footer;
