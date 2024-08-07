import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    optimismSepolia: {
      url: "https://sepolia.optimism.io",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    conduitRbuNetwork: {
      url: "https://rpc-rbu-network-38b1oaxsp9.t.conduit.xyz",
      accounts: [process.env.PRIVATE_KEY as string],
    },
    modeSepolia: {
      url: "https://rpc-mode-sepolia-vtnhnpim72.t.conduit.xyz",
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
};

export default config;
