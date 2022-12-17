module.exports = {
  apps: [
    {
      name: "blog",
      script: "npm",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: 3002,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3002,
      },
    },
  ],
};
