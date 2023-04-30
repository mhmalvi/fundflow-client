/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config) {
   config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      })
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '.i.ibb.co',
        port: "",
        pathname: "/**/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
}


module.exports = nextConfig
