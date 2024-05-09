import { Post } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

function PostCard(post: Post) {
  return (
    <div>
      <div className="px-2 mb-2 dark:border-gray-500 border-amber-300 border-2 w-fit rounded-md">
        {post.category}
      </div>
      <h2 className="mb-1 text-xl">
        <Link href={`post/${post._raw.flattenedPath}`}>{post.title}</Link>
      </h2>
      <span className="mb- text-gray-800 dark:text-gray-400">
        <Link href={`post/${post._raw.flattenedPath}`}>{post.description}</Link>
      </span>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}

export default PostCard;
