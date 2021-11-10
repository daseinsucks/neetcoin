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
        
      //function sell(address whoToSend, uint256 ntcToMint) payable public {
      //address owner = owner();
      //address whoToSend = msg.sender;
      //uint256 ntcToMint = msg.value;
      //Neetcoin.mint(owner, ntcToMint);
      //Neetcoin.send(owner, whoToSend, ntcToMint);
    //}
    
     function sell(address whoToSend, uint256 ntcToMint) payable public {
      address whoToSend = msg.sender;
      uint256 ntcToMint = msg.value;
      super._mint(whoToSend, ntcToMint);
    }
   }  
      
      
