"use client";

import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import PostCard from "./_components/PostCard";

const metadata = {
  title: "Post",
  description: "회고 및 개인공부에 대한 블로그 글목록",
};

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
    <div className="mx-auto lg:ml-40 max-w-5xl h-screen">
      <h1 className="mb-5 text-center text-3xl font-bold">공부함</h1>

      <div className="mt-8 space-y-16 transition-all duration-500">
        {filteredSnippetList.map((item, i) => {
          return (
            <div key={i} className="mt-4 grid grid-cols-1 gap-4">
              <PostCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostPage;
