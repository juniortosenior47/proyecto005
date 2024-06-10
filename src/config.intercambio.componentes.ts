const FederationPlugin = require("next-federation-plugin");

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new FederationPlugin({
        name: "Remote1",
        filename: "remote-entry.js",
        exposes: {
          "./Button": "./components/Button",
        },
        remotes: {
          Remote2: "Remote2@http://localhost:3000/static/chunks/remote-entry.js",
        },
      })
    );

    return config;
  },
}; 
