module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = {
        'ar.js': 'AR',
      };
    }
    return config;
  },
};
