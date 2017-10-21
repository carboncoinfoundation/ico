pragma solidity ^0.4.11;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CarbonCoinToken.sol";

contract TestCarboncoinToken {
  CarboncoinToken carboncoinToken = CarboncoinToken(DeployedAddresses.CarboncoinToken());

  function testTests() {
    bool something = true;
    bool nothing = true;
    Assert.equal(something, nothing, "Test setup works");
  }


}
