module.exports = {
  apps: [
    {
      name: 'Color AI',
      script: '.output/server/index.mjs',
      watch: true,
      exec_mode: 'cluster', // fork or cluster
      instances: '1', // Or a number of instances
      env: {
        PORT: 3002,
        NODE_ENV: 'development',
        OPENAI_API_KEY: '',
        MONGO_URL: '',
      },
    },
  ],
}
