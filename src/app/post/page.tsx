import { Post } from ".contentlayer/generated";
import { compareDesc } from "date-fns";
import { allPosts } from ".contentlayer/generated";

function PostPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log(posts);

  return (
    <main className="mx-auto max-w-5xl">
      <h1 className="my-8 text-center text-3xl font-bold">hello</h1>
      {posts.map((post) => (
        <h2 key={post._id}>{post.title}</h2>
      ))}
    </main>
  );
}

export default PostPage;
