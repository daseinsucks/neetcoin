pragma solidity ^0.8.9;

import "./Neetcoin.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract NtcSell is Ownable {
    Neetcoin _neetcoin;

    constructor(address token_address) {
        _neetcoin = Neetcoin(token_address);
    }


fallback() external payable {
        sellNtc();
      }

    function sellNtc() payable public {
      address owner = owner();
      address whoToSend = msg.sender;
      uint256 ntcToMint = msg.value;
      _neetcoin.mint(whoToSend, ntcToMint);
      owner.call{value: ntcToMint}('');
    }
}


