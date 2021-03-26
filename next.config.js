const withSass = require("@zeit/next-sass");

let nextConfig = {};

nextConfig = withSass(nextConfig);

module.exports = nextConfig;