import Link from "next/link";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

function SideNavIntro() {
  return (
    <div className="flex w-full justify-between ">
      <div className="flex justify-center m-5">
        <h1 className="text-3xl font-bold">
          <Link href="/">ParkingBox</Link>
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5 my-5 m-5">
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
        <div className="cursor-pointer">
          <Link href="/about">
            <VscAccount size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideNavIntro;
