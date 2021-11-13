pragma solidity ^0.8.9;

import "./Neetcoin.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ntcSell is Ownable{



constructor(address token_address) public {
  Neetcoin neetcoin = Neetcoin(token_address);
}

fallback() external payable {
        sellNtc();
      }

    function sellNtc() payable public {
      address owner = owner();
      address whoToSend = msg.sender;
      uint256 ntcToMint = msg.value;
      Neetcoin.mint(whoToSend, ntcToMint);
      owner.call{value: ntcToMint}('');
    }
}