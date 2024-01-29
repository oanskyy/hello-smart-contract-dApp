const contractABI = require("../contract-abi.json");
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const ALCHEMY_KEY = process.env.ALCHEMY_KEY

const web3 = createAlchemyWeb3(ALCHEMY_KEY); 


export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    CONTRACT_ADDRESS
  );

export const loadCurrentMessage = async () => { 
  
};

export const connectWallet = async () => {
  
};

export const getCurrentWalletConnected = async () => {
  
};

export const updateMessage = async (address, message) => {
  
};
