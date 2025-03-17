/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "/asian-am-303-final" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/asian-am-303-final" : "",
};
export default nextConfig;
