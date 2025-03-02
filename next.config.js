/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "example.com",
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "mblogthumb-phinf.pstatic.net",
    ],
  },
};

module.exports = nextConfig;
