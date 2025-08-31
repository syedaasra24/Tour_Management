/* config-overrides.js */
const { addWebpackAlias, override, overrideDevServer } = require('customize-cra');

// Dev server config override
const devServerConfig = () => config => {
  return {
    ...config,
    // Remove deprecated options
    onBeforeSetupMiddleware: undefined,
    onAfterSetupMiddleware: undefined,
    // Add the new setupMiddlewares option
    setupMiddlewares: (middlewares, devServer) => {
      // You can add custom middleware here if needed
      return middlewares;
    }
  };
};

module.exports = {
  webpack: override(),
  devServer: overrideDevServer(devServerConfig())
};