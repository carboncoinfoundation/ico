pragma solidity ^0.4.4;
import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract CarboncoinToken is StandardToken {

  string public name = 'CarboncoinToken';
  string public symbol = 'CCT';
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 160000000;

  function CarboncoinToken() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }

}
