// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

// for remix
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
  using SafeMath for uint;

  // add mapping to store user
  
  constructor (uint256 initialSupply) public ERC20("SyracuseToken", "SUT") {
    _mint(msg.sender, initialSupply);
  }

  function buy(uint256 amount) external {
    _mint(msg.sender, amount);
  }
 
}