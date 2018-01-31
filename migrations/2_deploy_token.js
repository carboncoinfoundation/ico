const CarboncoinSale = artifacts.require("./CarboncoinSale.sol")

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 240 // seconds
  const endTime = startTime + (86400 * 20); // 20 days
  const rate = new web3.BigNumber(1000);
  console.log(rate);
  deployer.deploy(CarboncoinSale, startTime, endTime, rate, { gas: 4712388 })
};
