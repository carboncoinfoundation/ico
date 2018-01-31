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
