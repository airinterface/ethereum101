// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {TokenRegistry} from "../src/TokenRegistry.sol";

contract TokenRegistryTest is Test {

    TokenRegistry public tokenRegistry;

    function setUp() public {
        tokenRegistry = new TokenRegistry();
    }

    function testRegisterToken() public {
        string memory tokenData = "Token Data 1";

        // Register the token and get the tokenId
        uint256 tokenId = tokenRegistry.registerToken(tokenData);

        // Verify the token data and owner
        string memory registeredData = tokenRegistry.getTokenData(tokenId);
        address owner = tokenRegistry.getTokenOwner(tokenId);

        assertEq(registeredData, tokenData);
        assertEq(owner, address(this));
    }

    function testGetTokenData() public {
        string memory tokenData = "Token Data 2";

        // Register the token and get the tokenId
        uint256 tokenId = tokenRegistry.registerToken(tokenData);

        // Verify the token data
        string memory registeredData = tokenRegistry.getTokenData(tokenId);

        assertEq(registeredData, tokenData);
    }

    function testGetTokenOwner() public {
        string memory tokenData = "Token Data 3";

        // Register the token and get the tokenId
        uint256 tokenId = tokenRegistry.registerToken(tokenData);

        // Verify the token owner
        address owner = tokenRegistry.getTokenOwner(tokenId);

        assertEq(owner, address(this));
    }

}
