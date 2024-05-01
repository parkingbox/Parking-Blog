import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import favicon from "../favicon.ico";

function SideNavIntro() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/">ParkingBox</Link>
        </h1>
      </div>
      <div className="flex justify-center gap-5 my-5">
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
    </div>
  );
}

export default SideNavIntro;
