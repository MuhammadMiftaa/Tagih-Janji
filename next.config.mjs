/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "i.pinimg.com",
      "api.microlink.io",
      "assets.aceternity.com",
      "static01.nyt.com",
    ],
  },
};

export default nextConfig;
