import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-20 ">
      © {new Date().getFullYear()}
      &nbsp;parkseungwoo all rights reserved.
    </div>
  );
}

export default Footer;
