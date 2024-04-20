"use client";

import Link from "next/link";
import React from "react";
import DarkModeBtn from "./DarkModeBtn";
import ScrollIndicate from "./ScrollIndicate";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import Category from "@/src/components/Category";

function Header() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const params = useSearchParams();
  const keyParams = params.get("key");

  const isAll = !keyParams || keyParams === "";

  const filteredSnippetList = posts.filter((post) => {
    if (isAll) return true;
    return post.category === keyParams;
  });
  return (
    <nav className="fixed top-0 h-full overflow-x-hidden left-0 w-[220px] z-[99] overflow-y-hidden shadow-md transition-all duration-500">
      <ScrollIndicate />
      <div className=" mx-auto flex flex-wrap h-full w-full max-w-3xl items-center justify-center px-4 ">
        <h1 className="text-3xl font-bold">
          <Link href="/">ParkingBox</Link>
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
        </h1>
        <div className="  gap-5">
          <div>
            <Link href={`?`} className="flex items-center rounded-md  ">
              <Category selected={isAll}>
                <div className="cursor-pointer ">ALL</div>
              </Category>
            </Link>
          </div>
          <div className="gap-5">
            {posts
              .filter((item, index, self) => {
                return (
                  self.findIndex((t) => t.category === item.category) === index
                );
              })
              .map((post, i) => (
                <Link
                  key={i}
                  href={`?key=${post.category}`}
                  className="rounded-md"
                >
                  <Category
                    className="cursor-pointer whitespace-nowrap"
                    selected={post.category === keyParams}
                  >
                    <div className="cursor-pointer">{post.category}</div>
                  </Category>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <DarkModeBtn />
    </nav>
  );
}

export default Header;
