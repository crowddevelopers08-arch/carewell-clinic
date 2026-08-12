import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/x6ec5hqm/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
