import type { NextConfig } from "next";

// Built as plain static files for GitHub Pages (see .github/workflows/pages.yml).
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  // Every page becomes folder/index.html, which GitHub Pages serves at /folder/.
  trailingSlash: true,
  // GitHub Pages has no image optimisation server.
  images: { unoptimized: true },
  experimental: {
    // One 404 page for both root layouts: app/(de) and app/[lang].
    globalNotFound: true,
  },
};

export default nextConfig;
