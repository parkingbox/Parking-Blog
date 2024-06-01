import { Post } from "@/.contentlayer/generated";
import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import Link from "next/link";
import { LuCalendarDays } from "react-icons/lu";

type data = Date | string;

function PostCard(post: Post) {
  function foramtDate(date: data) {
    const d = new Date(date);
    const now = Date.now();
    const diff = (now - d.getTime()) / 1000;
    if (diff < 60 * 1) {
      return "방금 전";
    }
    if (diff < 60 * 60 * 24 * 3) {
      return formatDistanceToNow(d, { addSuffix: true, locale: ko });
    }
    return format(d, "PPP", { locale: ko });
  }
  console.log(post.date);

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
      <time
        dateTime={post.date}
        className="flex items-center mb-2 gap-1 text-xs text-gray-600"
      >
        <LuCalendarDays />
        {foramtDate(post.date)}
      </time>
    </div>
  );
}

export default PostCard;
