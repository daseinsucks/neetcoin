var Neetcoin = artifacts.require("./Neetcoin.sol");
var ntcSell = artifacts.require("./ntcSell.sol")

module.exports = function (deployer, accounts) {
  
  deployer.then(async () => {
    await deployer.deploy(Neetcoin,"Neetcoin", "NTC");
    Neetcoin = await Neetcoin.deployed();
    return Neetcoin.address;
  }).then(function (coinaddress) {
    let addr = web3.utils.toChecksumAddress(coinaddress);
    return deployer.deploy(ntcSell, addr);
  });
};