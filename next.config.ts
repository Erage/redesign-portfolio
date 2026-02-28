/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/redesign-portfolio', // Required for GitHub Pages subfolders
  images: {
    unoptimized: true,
  },
};
export default nextConfig;