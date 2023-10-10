/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindui.com",
      "res.cloudinary.com"
    ]
  }
}

module.exports = nextConfig

module.exports = {
  swcMinify: false, // Disable SWC minification
  // Other Next.js configuration options...
};
