# NFT-fully-on-chain

This is a NFT with based64 encoded SVG Images stored 100% On-Chain creation from Chainlink Hackathon Spring 2022

<br/>
<p align="center">
<img src="./images/happy.svg" width="225" alt="NFT Happy">
<img src="./images/frown.svg" width="225" alt="NFT Frown">
</p>
<br/>

## Objetives
1. Mint an NFT based on the price of ETH
- If ETHprice  > someNumer: NFT1
- if ETHprice < someNumber: NFT2

## Requirements for creating similar projects from scratch
- Start hardhat project:
```bash
npm init -y
npm install --save-dev hardhat
npx hardhat
```
- Add .gitignore file containing:
```bash
node_modules
.env
coverage
coverage.json
typechain

#Hardhat files
cache
artifacts
```

- Install dependencies:
```bash
yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv
```
```bash
npm install --save-dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
```
```bash
npm install base64-sol
```
```bash
npm install dotenv --save
```

## How to deploy
- Rinkeby network:
```bash
npx hardhat deploy --network rinkeby 
```

## Resources
- [hardhat-nft-fcc](https://github.com/PatrickAlphaC/hardhat-nft-fcc): Patrick's repo for NFTs
- [hardhat-starter-kit](https://github.com/smartcontractkit/hardhat-starter-kit)
- [OpenZeppeling github](https://github.com/OpenZeppelin/openzeppelin-contracts): OpenZeppeling github
- [SVG documentation](https://www.w3schools.com/graphics/svg_intro.asp): SVG documentation and examples
- [SVG real time encoding](https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_myfirst): encode SVG and see result in real time
- [Base64.sol SmartContract](https://github.com/Brechtpd/base64/blob/main/base64.sol): used to base64 encode SVGs