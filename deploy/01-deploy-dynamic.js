const { network, ethers } = require("hardhat")
const fs = require("fs")

module.exports = async function(hre) {
    const { getNamedAccounts, deployments } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // Rinkeby ETH/USD: 0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
    let ethUsdPriceFeedAddress 
    if(chainId == 31337) {//local network
        const ethUsdAggregator = await ethers.getContract("MockV3Aggregator") // deployed before in 00-deploy-mocks
        ethUsdPriceFeedAddress = ethUsdAggregator.address.toString()
        console.log(ethUsdPriceFeedAddress)
    } else { //rinkeby
        ethUsdPriceFeedAddress = "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e"
    }
    const threshold = ethers.utils.parseEther("2000") // threshold to select from images
    const lowSvg = await fs.readFileSync("./images/frown.svg", { encoding: "utf8"}) // read svg files
    const highSvg = await fs.readFileSync("./images/happy.svg", { encoding: "utf8"})
    args = [ethUsdPriceFeedAddress, lowSvg, highSvg, threshold] // args
    const dynamicSvgNft = await deploy("DynamicSvgNft", { // deploy
        from: deployer,
        args: args,
        log: true,
    })

    const dynamicContract = await ethers.getContract("DynamicSvgNft");
    await dynamicContract.mintNft()
    console.log("MINTED NFT!")
}

module.exports.tags = ["all", "dynamicsvg"]
