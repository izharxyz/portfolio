import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
            pathname: "/dmgaiipf2/image/upload/v1/media/**",
        },
    ],
},
};

export default nextConfig;
