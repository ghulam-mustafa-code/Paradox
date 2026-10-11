import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.100.232"],
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
