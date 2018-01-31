const CarboncoinSale = artifacts.require("./CarboncoinSale.sol")

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 240 // seconds
  const endTime = startTime + (86400 * 20); // 20 days
  const rate = new web3.BigNumber(1000);
  console.log(rate);
  const wallet = 0x3c4a436837ba8f8f77cb3525f4875aadd9f1c509;

  deployer.deploy(CarboncoinSale, startTime, endTime, rate, wallet, { gas: 4712388 })
};
