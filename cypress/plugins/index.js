const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('./config/', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  const file = config.env.fileConfig || 'prod';
  on('file:preprocessor', cucumber());
  return getConfigurationByFile(file);
};
