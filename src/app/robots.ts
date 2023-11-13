import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://parking-blog-three.vercel.app/sitemap.xml",
    host: "https://parking-blog-three.vercel.app/",
  };
}
