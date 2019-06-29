const TokenMe = artifacts.require('TokenMe');

module.exports = function (deployer) {
  deployer.deploy(TokenMe);
};
