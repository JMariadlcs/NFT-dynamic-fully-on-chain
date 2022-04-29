// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

    import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

    /**
    * @dev
    * 1. Mint an NFT based on the price of ETH
    * - If ETHprice  > someNumer: NFT1
    * - if ETHprice < someNumber: NFT2
    */
contract DynamicSvgNft is ERC721 {

    uint256 public s_tokenCounter; // NFTid

    constructor() ERC721("Dynamic SVG NFT", "DSN") {

    }

    function mintNft() external {
        _safeMint(msg.sender, s_tokenCounter);
        s_tokenCounter = s_tokenCounter +1; // update NFTid
    }



}

