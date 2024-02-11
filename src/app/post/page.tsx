"use client";

import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";

const metadata: Metadata = {
  title: "Post",
  description: "회고 및 개인공부에 대한 블로그 글목록",
};

function PostCard(post: Post) {
  return (
    <div className="">
      <h2 className="mb-1 text-xl">
        <Link href={`post/${post._raw.flattenedPath}`}>{post.title}</Link>
      </h2>
      <span className="mb- text-gray-800">
        <Link href={`post/${post._raw.flattenedPath}`}>{post.description}</Link>
      </span>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

function PostPage() {
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
    <div className="mx-auto max-w-5xl h-screen">
      <h1 className=" text-center text-3xl font-bold">공부함</h1>
      <div className="flex gap-5">
        <div>
          <Link href={`?`} className="flex items-center">
            <div className="rounded-md bg-[#F7ECDC] p-2 text-black hover:bg-[#f7dfba] cursor-pointer text-black">
              ALL
            </div>
          </Link>
        </div>
        <div className="flex gap-5">
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
                className="rounded-md bg-[#F7ECDC] p-2 text-black hover:bg-[#f7dfba]"
              >
                <div className="cursor-pointer text-black">{post.category}</div>
              </Link>
            ))}
        </div>
      </div>

      <div className="mt-8 space-y-16">
        {filteredSnippetList.map((item, i) => {
          return (
            <div key={i} className="mt-4 grid grid-cols-2 gap-4">
              <PostCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostPage;
