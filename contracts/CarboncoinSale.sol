pragma solidity ^0.4.4;

import './CarboncoinToken.sol';
import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';


contract CarboncoinSale is Crowdsale {

  function CarboncoinSale(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet)
    Crowdsale(_startTime, _endTime, _rate, _wallet) {
  }

  // creates the token to be sold.
  function createTokenContract() internal returns (MintableToken) {
    return new CarboncoinToken();
  }

}
