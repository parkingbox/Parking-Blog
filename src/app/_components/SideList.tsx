import React from "react";

import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import Category from "@/src/components/Category";
import Link from "next/link";

function SideList() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  const params = useSearchParams();
  const keyParams = params.get("key");

  const isAll = !keyParams || keyParams === "";

  const categoryCounts = posts.reduce(
    (acc: Record<string, number>, post: Post) => {
      if (post.category) {
        acc[post.category] = acc[post.category] ? acc[post.category] + 1 : 1;
      }
      return acc;
    },
    {}
  );
  function sumObjectValues(obj: Record<string, number>) {
    return Object.values(obj).reduce((acc, value) => acc + value, 0);
  }
  const total = sumObjectValues(categoryCounts);

  return (
    <div className="gap-5">
      <div>
        <Link href={`?`} className="flex items-center rounded-md  ">
          <Category selected={isAll}>
            <div className="cursor-pointer ">ALL ({total}) </div>
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
              href={`/?key=${post.category}`}
              className="rounded-md"
            >
              <Category
                className="cursor-pointer whitespace-nowrap"
                selected={post.category === keyParams}
              >
                <div className="cursor-pointer">
                  {post.category} ({categoryCounts[post.category!]})
                </div>
              </Category>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default SideList;
