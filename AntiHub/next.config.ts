import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Docker 多阶段构建需要
  output: "standalone",

  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: "http://backend:8000/:path*",
      },
      // 兼容桌面端 AntiHook：域名只需要指向 web，由 web 代转发到 backend
      {
        source: "/api/plugin-api/:path*",
        destination: "http://backend:8000/api/plugin-api/:path*",
      },
      {
        source: "/api/kiro/oauth/callback",
        destination: "http://backend:8000/api/kiro/oauth/callback",
      },
    ];
  },
};

export default nextConfig;
