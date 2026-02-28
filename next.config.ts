/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/redesign-portfolio', // MUST match your repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;