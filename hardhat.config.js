require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
        {
            version: "0.8.7",
        },
        {
            version: "0.6.6",
        },
    ],
  },
  networks: {
    hardhat: {
      chainId: 31337
    },
    rinkeby: {
      chainId: 4,
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};
