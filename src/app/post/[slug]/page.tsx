import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Metadata } from "next";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.url,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.url === params.slug);
  if (!post) {
    return;
  }
  const { title, date: publishedTime, description, url, category } = post;

  return {
    title,
    description,
    openGraph: {
      title: { absolute: title },
      description,
      type: "article",
      publishedTime,
      url: `https://parking-blog-three.vercel.app/post/${url}`,
    },
    category,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="h-full mx-auto lg:ml-40">
      <div className="mb-6">
        <h1 className="mb-1 text-3xl font-semibold transition-all duration-500">
          {post.title}
        </h1>
      </div>
      <div className="h-full">
        <article className="transition-all duration-500 prose dark:prose-invert prose-h1:text-2xl prose-a:break-all break-keep ">
          <MDXContent components={mdxComponents} />
        </article>
      </div>
    </div>
  );
}
