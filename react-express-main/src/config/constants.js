const devConfig = {
  MONGO_URL: 'mongodb+srv://test123:muvodich@cluster0.bezrh5w.mongodb.net/?retryWrites=true&w=majority',
  JWT_SECRET: 'thisisasecret',
};

const testConfig = {
  MONGO_URL: 'mongodb+srv://test123:muvodich@cluster0.bezrh5w.mongodb.net/?retryWrites=true&w=majority',
  JWT_SECRET: 'thisisasecret',
};

const prodConfig = {
  MONGO_URL: 'mongodb+srv://test123:muvodich@cluster0.bezrh5w.mongodb.net/?retryWrites=true&w=majority',
  JWT_SECRET: 'thisisasecret',
};

const defaultConfig = {
  PORT: process.env.PORT || 4001,
  JWT_SECRET: 'thisisasecret',
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}
module.exports = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
// }
// export default {
  
