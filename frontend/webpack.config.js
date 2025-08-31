const path = require('path');

module.exports = {
  // Other webpack configurations can be added here
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // You can add your custom middleware here if needed
      return middlewares;
    }
  }
};