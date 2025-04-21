import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "example.com",
      "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      "mblogthumb-phinf.pstatic.net",
      "ibb.co",
      "via.placeholder.com",
      "www.kjcnews.co.kr",
    ],
  },
};

export default nextConfig;
