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
yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv @chainlink/contracts base64-sol
```
or
```bash
npm install --save-dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers
npm install @nomiclabs/hardhat-ethers
npm install @chainlink/contracts
npm install dotenv --save
npm install base64-sol
``` 

## How to deploy
- Rinkeby network:
```bash
npx hardhat deploy --network rinkeby 
```
or
```bash
yarn hardhat deploy --network rinkeby 
```

## Resources
- [hardhat-nft-fcc](https://github.com/PatrickAlphaC/hardhat-nft-fcc): Patrick's repo for NFTs.
- [hardhat-starter-kit](https://github.com/smartcontractkit/hardhat-starter-kit)
- [OpenZeppeling github](https://github.com/OpenZeppelin/openzeppelin-contracts): OpenZeppeling github.
- [ERC721 JSON example](https://data:application/json;base64eyJuYW1lIjoiQ2hhaW5saW5rIEZlZWRzIE5GVCIsICJkZXNjcmlwdGlvbiI6IkFuIE5GVCB0aGF0IGNoYW5nZXMgYmFzZWQgb24gdGhlIENoYWlubGluayBGZWVkIiwgImF0dHJpYnV0ZXMiOiIiLCAiaW1hZ2UiOiJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU2N4TGpFbklHbGtQU2RNWVhsbGNsOHhKeUI0Yld4dWN6MG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY25JSGh0Ykc1ek9uaHNhVzVyUFNkb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1ckp5QjRQU2N3Y0hnbklIazlKekJ3ZUNjZ2QybGtkR2c5SnpJMk1IQjRKeUJvWldsbmFIUTlKekkwTkhCNEp5QjJhV1YzUW05NFBTY3dJREFnTWpZd0lESTBOQ2NnWlc1aFlteGxMV0poWTJ0bmNtOTFibVE5SjI1bGR5QXdJREFnTWpZd0lESTB%20OQ2NnZUcxc09uTndZV05sUFNkd2NtVnpaWEoyWlNjK1BIQmhkR2dnWkQwblRUSTFPQ3d4TVRoMk9UWmpNQ3d4TkM0ek16TXRNVE11TmpZM0xESTRMVEk0TERJNGFDMDROR010TVRjdU5ETTVMREF0TXpFdU5UY3hMVEl1TVRVeUxUUTRMVGhqTFRVdU1EY3pMVEV1T0RBMkxUSXdMVGd0TWpBdE9GWXhNVFJzTmpZdU1ETTJMVGMzTGpVMk4wd3hOVEFzTW1neE1tTXhNeTR5T1RRc01Dd3lNaTQyTlRjc01UQXVOakEzTERJeUxqWTFOeXd5TXk0NU1ESjJOeTQwTnpkak1Dd3hOeTR3TmpVdE1TNHdNamdzTXpRdU1URTFMVE11TURjNExEVXh): remove 'https://'
- [SVG documentation](https://www.w3schools.com/graphics/svg_intro.asp): SVG documentation and examples.
- [SVG real time encoding](https://www.w3schools.com/graphics/tryit.asp?filename=trysvg_myfirst): encode SVG and see result in real time.
- [Base64.sol SmartContract](https://github.com/Brechtpd/base64/blob/main/base64.sol): used to base64 encode SVGs
- [Chainlink Data Feeds](https://docs.chain.link/docs/get-the-latest-price/): Chainlink Data Feeds documentation for getting ETH price.
- [Ethereum Price Data Feed](https://docs.chain.link/docs/ethereum-addresses/): Needed when deploy