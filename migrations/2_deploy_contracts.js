var mwadToken = artifacts.require("./mwadToken.sol");
var mwadTokenSale = artifacts.require("./mwadTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(mwadToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(mwadTokenSale, mwadToken.address, tokenPrice);
  });
};