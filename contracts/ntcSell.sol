pragma solidity ^0.8.9;

import "./Neetcoin.sol";

contract ntcSell is Neetcoin {
     constructor() Neetcoin("Neetcoin", "NTC") public {}

    function sellNtc() payable public {
      address owner = owner();
      address whoToSend = msg.sender;
      uint256 ntcToMint = msg.value;
      super._mint(whoToSend, ntcToMint);
      owner.call{value: ntcToMint}('');
    }
}