# New Carboncoin ICO

Allowing new supporters of Carboncoin to purchase tokens redeemable for coins on the forthcoming Carboncoin network to be built with the funds raised.

## Technical Instructions

These contracts for the Carboncoin Ethereum Swapout make use of [Truffle](truffleframework.com) and [Open Zeppelin](https://openzeppelin.org/).

### Suggested Tutorials and Reading before contributing

* [Truffle Pet Shop](http://truffleframework.com/tutorials/pet-shop)
* [Building Robust Smart Contracts with Open Zeppelin](http://truffleframework.com/tutorials/robust-smart-contracts-with-openzeppelin)
* [Mintable Token Tutorial](https://blog.zeppelin.solutions/how-to-create-token-and-initial-coin-offering-contracts-using-truffle-openzeppelin-1b7a5dae99b6)

### Getting up and running locally

Install Ethereum TestRPC and Truffle:

`npm install -g ethereumjs-testrpc`

`npm install -g truffle`

Clone this repository and npm install. This will install Open Zeppelin.

### Deploying locally

Run the Ethereum testrpc in a terminal window:

`testrpc`

In a separate window, compile the project and run the migrations, deploying the contract to testrpc:

`truffle compile`

`truffle migrate`
