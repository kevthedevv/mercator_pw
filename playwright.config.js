
const settings = { path: '.env', defaults: '.env.defaults' };
require( 'dotenv-defaults' ).config( settings )


  const config  = {
    use: {
      headless: false,
      viewport: { width: 1920, height: 1080 },
      baseURL: 'https://dev.mercator.createit.dev'
    },
    reporter: './custom-reporter.js',
  };

  module.exports = config;