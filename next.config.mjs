/**
 * @format
 * @type {import('next').NextConfig}
 */

import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default withPayload(nextConfig);
