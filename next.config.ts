// next.config.ts
const nextConfig = {
  output: 'export', // This creates the "out" folder for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
};
export default nextConfig;