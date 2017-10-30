import React, { Component } from 'react'
import CarboncoinSale from '../build/contracts/CarboncoinSale.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      web3: null,
      crowdsale: null,
      account: null,
      tokenAddress: null,
    }
  }

  componentWillMount() {
    // Instantiate contract and get web3, account and saleInstance
    // See utils/getWeb3 for more info.
    const contract = require('truffle-contract')
    const carboncoinSale = contract(CarboncoinSale)
    getWeb3.then(results => {
      carboncoinSale.setProvider(results.web3.currentProvider)
      results.web3.eth.getAccounts((error, accounts) => {
        carboncoinSale.deployed().then((crowdsale) => {
          crowdsale.token().then(addr => {
            this.setState({
              web3: results.web3,
              account: accounts[0],
              crowdsale,
              tokenAddress: addr,
            })
          })
        })
      });
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }



  buyCoins = () => {
    this.state.crowdsale.sendTransaction({
      from: this.state.account,
      value: this.state.web3.toWei(2, "ether"),
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">Truffle Box</a>
        </nav>
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1>Good to Go!</h1>
              <h2>Smart Contract Example</h2>
              { this.state.web3 ? <button onClick={this.buyCoins}>Buy Carboncoins</button> : null }
              <p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
              <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
              <p>The stored value is: </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App
