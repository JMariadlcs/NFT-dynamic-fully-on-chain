// We are mocking Ethereum Price Feed for local network!

const { network, ethers } = require("hardhat")

module.exports = async function(hre) {
    const { getNamedAccounts, deployments } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const DECIMALS = "18"
    const INITIAL_ANSWER = ethers.utils.parseEther("2000")

    if(chainId == 31337) {//local network
        await deploy("MockV3Aggregator", {
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER] // check args in MockV3Aggregator.sol constructor
        })
    }
}

module.exports.tag = ["all", "mocks"]