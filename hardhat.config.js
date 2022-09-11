require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


/** @type import('hardhat/config').HardhatUserConfig */


const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      // How do we define which test network to deploy to 
      url: ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  // How to we define which account to use for deployment
};
