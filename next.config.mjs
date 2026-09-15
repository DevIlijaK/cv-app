// This app lives at ilijakosanin.dev/cv-app-v1: that site rewrites
// `/cv-app-v1/*` to this deployment, so every route and asset here has to
// carry the prefix. Next applies it to routes, links, `next/image` and
// `_next/` assets; `NEXT_PUBLIC_BASE_PATH` lets hand-written `<source>` /
// `<img>` tags and metadata URLs do the same.
const basePath = "/cv-app-v1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
