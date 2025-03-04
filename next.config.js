/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
  images: {
    domains: [
      "example.com",
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "mblogthumb-phinf.pstatic.net",
      "ibb.co",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
