import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable symlinks to fix Windows/OneDrive issues
    turbo: {
      resolveAlias: {}
    }
  }
};

export default nextConfig;
