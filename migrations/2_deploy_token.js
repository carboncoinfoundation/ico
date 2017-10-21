var CarboncoinToken = artifacts.require('./CarboncoinToken.sol');

module.exports = function(deployer) {
  deployer.deploy(CarboncoinToken);
}
