/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // devIndicators: false,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // async rewrites() {  // <--- 이 부분을 주석 처리
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'http://localhost:3000/:path*',
  //     },
  //   ];
  // },
};

export default nextConfig;
