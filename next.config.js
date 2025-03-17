/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "www.kjcnews.co.kr",
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

