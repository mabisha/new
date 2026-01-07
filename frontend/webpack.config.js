// webpack.config.js
module.exports = {
    // Other config settings...
    externals: {
      "@babel/runtime/helpers/esm/extends": "@babel/runtime/helpers/esm/extends",
      "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose": "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"
    }
  };
  