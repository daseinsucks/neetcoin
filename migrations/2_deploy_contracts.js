var Neetcoin = artifacts.require("./Neetcoin.sol");
var ntcSell = artifacts.require("./ntcSell.sol")
module.exports = function(deployer) {
  deployer.deploy(Neetcoin, "Neetcoin", "NTC");
  deployer.deploy(ntcSell);
};