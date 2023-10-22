import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-1 text-3xl font-semibold">{post.title}</h1>
        <h4 className="font-light text-gray-700 dark:text-gray-400"></h4>
      </div>
      <MDXContent components={mdxComponents} />
    </div>
  );
}
