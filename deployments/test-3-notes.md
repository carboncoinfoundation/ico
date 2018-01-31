# Test deployment 02

## Helpful commands

`geth attach`

Then in Geth:

`eth.getBlock("latest").gasLimit`

## Token details:

string public name = 'NCC Test Two';
string public symbol = 'NCCTWO';
uint public decimals = 8;

## 2_deploy_token.js

```
const CarboncoinSale = artifacts.require("./CarboncoinSale.sol")

module.exports = function(deployer, network, accounts) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 240 // seconds
  const endTime = startTime + (86400 * 20); // 20 days
  const rate = new web3.BigNumber(1000);
  console.log(rate);
  deployer.deploy(CarboncoinSale, startTime, endTime, rate, { gas: 4712388 })
};


```

## Truffle file:

```
module.exports = {
  networks: {
    "classic": {
      network_id: 1,
      from: process.env.CREATOR_ACCOUNT, // default address to use for any transaction Truffle makes during migrations
      host: "localhost",
      gas: 4712388,
      port: 8546
    },
    "development": {
      host: "localhost",
      port: 8545,
      network_id: 2 // Match any network id
    }
  },
  solc: { optimizer: { enabled: true, runs: 200 } }
};
```

## Input data:

0x6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556101de8061003b6000396000f300606060405263ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630900f010811461005d578063445df0ac1461007e5780638da5cb5b146100a3578063fdacd576146100d257600080fd5b341561006857600080fd5b61007c600160a060020a03600435166100e8565b005b341561008957600080fd5b61009161017d565b60405190815260200160405180910390f35b34156100ae57600080fd5b6100b6610183565b604051600160a060020a03909116815260200160405180910390f35b34156100dd57600080fd5b61007c600435610192565b6000805433600160a060020a03908116911614156101795781905080600160a060020a031663fdacd5766001546040517c010000000000000000000000000000000000000000000000000000000063ffffffff84160281526004810191909152602401600060405180830381600087803b151561016457600080fd5b6102c65a03f1151561017557600080fd5b5050505b5050565b60015481565b600054600160a060020a031681565b60005433600160a060020a03908116911614156101af5760018190555b505600a165627a7a72305820e0b71db3893c9fd0576e8fc78800447d173c058a1a1999284a23164de25c8a610029

## Console output

➜  ico git:(master) ✗ truffle migrate --network classic
Using network 'classic'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x4bd8f8a640faa577514b4a8af6a0b28d8d75f3ec6758ada4b11b0db0373a5bac
  Migrations: 0x0301f237e0afa7931812b523c591b7fdfb778279
Saving successful migration to network...
  ... 0x31e09ec651ce987a1ed990ef3a9ee4ba1134959cab944fed57e8efeb16636ff4
Saving artifacts...
Running migration: 2_deploy_token.js
{ [String: '1000'] s: 1, e: 3, c: [ 1000 ] }
  Deploying CarboncoinSale...
  ... 0x4f93dbe587676d9583e18aa0f9497a680bb556f7c7e78cdb4d121937de18eabf
  CarboncoinSale: 0x6e041a120dad5fe564bedda7ab8305e10af92009
Saving successful migration to network...
  ... 0x752ec45275bcdaeb869f4f0472f7c0245dc314a474aba1327f15db604bbb09df
Saving artifacts...

## Addresses

* CarboncoinSale Contract: [0x6e041a120dad5fe564bedda7ab8305e10af92009](http://gastracker.io/addr/0x6e041a120dad5fe564bedda7ab8305e10af92009)
* Token Contract: [0x7d9597009966630DF9Ae4fA56AFAc2B6ee0De938](http://gastracker.io/contract/0x7d9597009966630DF9Ae4fA56AFAc2B6ee0De938)
* Receiving Wallet:
[0x3c4a436837ba8f8f77cb3525f4875aadd9f1c509](https://gastracker.io/addr/0x3c4a436837ba8f8f77cb3525f4875aadd9f1c509)

## Notes

Receiving wallet hard-coded into the CarboncoinSale solidity contract to prevent previous issues where numbers were altered when converted to solidity's address type:

in 0x3c4a436837ba8f8f77cb3525f4875aadd9f1c509
-> 0x3C4A436837Ba8FdB000B1d4621ae012E80000000

in 0x12e44e8f21bccf360ac170f535ac81906eadc331
-> 0x12e44e8F21BccEc57F81b7C79292bC8F80000000
