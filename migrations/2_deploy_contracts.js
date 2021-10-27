var Neetcoin = artifacts.require("./Neetcoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Neetcoin, "Neetcoin", "NTC");
};