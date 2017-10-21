pragma solidity ^0.4.4;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract CarboncoinToken is MintableToken {

  string public name = 'Carboncoin';
  string public symbol = 'NCC';
  uint public decimals = 18;

}
