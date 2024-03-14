/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.velog.io",
        port: "",
        pathname:
          "/images/ducks1077/post/397ed207-80a4-4505-a90c-82c88fe3c9d3/todolist.png",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/*/*",
      },
    ],
  },
};

export default nextConfig;
