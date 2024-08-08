// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./interfaces/IERC20Mintable.sol";

contract USDToken is ERC20, IERC20Mintable {
    constructor() ERC20("USD Token", "USDT") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function mint(uint256 amount, address recipient) external {
        _mint(recipient, amount);
    }
}
