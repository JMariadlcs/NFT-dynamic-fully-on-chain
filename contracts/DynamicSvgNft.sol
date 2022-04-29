// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "base64-sol/base64.sol";

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

    /// @notice function to return first part of URI
    function _baseURI() internal pure override returns(string memory) {
        return "data:application/json;base64,";
    }

    /**
    * @dev
    * - Function to generate tokenURI
    * If its 'override' because openzeppeling ERC721.sol already has tokenURI function and we
    * are overriding our own function (create a different one)
    * 'virtual override': would mean that the function is overridable
    * - Encode JSON with Base64.sol
    */
    function tokenURI(uint256 tokenId) public view override returns(string memory) {

        string memory metaDataTemplate = '{"name": "Dynamic NFT", "description": "Awesome NFT", "attributes": "[{"trait_type":"coolness","value":"100"}], "image":"???????????""}';
        bytes memory metaDataTemplateInBytes = bytes(metaDataTemplate); // nedeed to use Base64.sol encode() function
        string memory encodedMetada = Base64.encode(metaDataTemplateInBytes);
        
        return (string(abi.encodePacked(_baseURI(), encodedMetada))); // return both strings concatenated (baseURI + encodedMEtada) = fullJSON encoded except image 
    }



}

