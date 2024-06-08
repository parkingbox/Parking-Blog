const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  missingSuspenseWithCSRBailout: false,
};
module.exports = withContentlayer(nextConfig);
