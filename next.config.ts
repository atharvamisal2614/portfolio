import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
protocol:'https',
hostname:'cdn.programiz.com'
      },
            {
protocol:'https',
hostname:'img.freepik.com'
      },
                  {
protocol:'https',
hostname:'media.giphy.com'
      },

                        {
protocol:'https',
hostname:'www.pngfind.com'
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
      },
    ],
  },
};

export default nextConfig;
