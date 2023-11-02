const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
};
module.exports = withContentlayer(nextConfig);
