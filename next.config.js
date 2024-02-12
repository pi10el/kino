/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st.kp.yandex.net',
        port: '',
        pathname: '/images/*/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/get-kinopoisk-image/*/**',
      },
    ],
    domains: ['st.kp.yandex.net', 'avatars.mds.yandex.net'],
  },
};

module.exports = nextConfig;
