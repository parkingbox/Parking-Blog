"use client";

import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import PostCard from "./_components/PostCard";
import SideList from "./_components/SideList";

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
    <div className="mx-auto max-w-5xl h-screen">
      <h1 className="mb-5 text-center text-3xl font-bold">게시글 목록</h1>
      <SideList />
      <div className="space-y-16 transition-all duration-500">
        {filteredSnippetList.map((item, i) => {
          return (
            <div key={i} className="mt-4 gap-4">
              <PostCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostPage;
