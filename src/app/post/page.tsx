import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post",
  description: "회고 및 개인공부에 대한 블로그 글목록",
};

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`post/${post._raw.flattenedPath}`}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
          passHref
        >
          {post.title}
        </Link>
      </h2>
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

  return (
    <main className="mx-auto max-w-5xl h-screen">
      <h1 className="my-8 text-center text-3xl font-bold">공부함</h1>
      {posts.map((post, idx) => (
        <>
          <PostCard key={idx} {...post} />
        </>
      ))}
    </main>
  );
}

export default PostPage;
