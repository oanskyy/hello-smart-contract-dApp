const contractABI = require("../contract-abi.json")
const { createAlchemyWeb3 } = require("@alch/alchemy-web3")

// const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
// const ALCHEMY_KEY = process.env.ALCHEMY_KEY
// const web3 = createAlchemyWeb3(ALCHEMY_KEY)

const contract_address = "0x2c0E8679Fc8150b6DC86F4ef276624C6ac832B0D"
const alchemyKey =
	"wss://eth-sepolia.g.alchemy.com/v2/OOnr_0ZcMIzvKxknbXrSDIqh_ZDP0itR"
const web3 = createAlchemyWeb3(alchemyKey)

export const helloWorldContract = new web3.eth.Contract(
	contractABI,
	contract_address
	// CONTRACT_ADDRESS
)

export const loadCurrentMessage = async () => {
	const message = await helloWorldContract.methods.message().call()
	return message
}

export const connectWallet = async () => {}

export const getCurrentWalletConnected = async () => {}

export const updateMessage = async (address, message) => {}
