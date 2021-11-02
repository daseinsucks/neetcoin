pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Neetcoin is ERC20, Ownable {
    constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) public {}
    
      function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }
    
      function send(address sender, address recipient, uint256  amount) public {
        _transfer(sender, recipient, amount);
    }    
}
