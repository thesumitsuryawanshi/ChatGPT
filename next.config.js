// // next.config.js
// const withCSS = require('@zeit/next-css');

// module.exports = withCSS({
//   /* additional Next.js config */
// });

const nextConfig = {
  images: {
    domains: ["s.gravatar.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
