/** @type {import('next').NextConfig} */
const nextConfig = {
  /* output: "export", */
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.pharmek.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "swiperjs.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
