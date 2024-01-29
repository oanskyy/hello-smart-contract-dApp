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

export const connectWallet = async () => {
	// https://docs.metamask.io/wallet/reference/provider-api/#table-of-contents
	// window.Ethereum is a global API injected by Metamask and other wallet providers that allows websites to request users' Ethereum accounts. If approved, it can read data from the blockchains the user is connected to, and suggest that the user sign messages and transactions
	if (window.ethereum) {
		try {
			const addressArray = await window.ethereum.request({
                //method: "eth_requestAccounts" will return an array containing all of the user's account addresses connected to the dApp
				method: "eth_requestAccounts"
			})
			const obj = {
				status: "👆🏽 Write a message in the text-field above.",
				address: addressArray[0]
			}
			return obj
		} catch (err) {
			return {
				address: "",
				status: "😥 " + err.message
			}
		}
	} else {
		return {
			address: "",
			status: (
				<span>
					<p>
						{" "}
						🦊{" "}
						<a
							href={`https://metamask.io/download`}
							target='_blank'
							rel='noreferrer'
						>
							You must install Metamask, a virtual Ethereum wallet, in your
							browser.
						</a>
					</p>
				</span>
			)
		}
	}
}

export const getCurrentWalletConnected = async () => {
	if (window.ethereum) {
		try {
			const addressArray = await window.ethereum.request({
				// returns an array containing the Metamask addresses currently connected to our dApp
				method: "eth_accounts"
			})
			if (addressArray.length > 0) {
				return {
					address: addressArray[0],
					status: "👆🏽 Write a message in the text-field above."
				}
			} else {
				return {
					address: "",
					status: "🦊 Connect to Metamask using the top right button."
				}
			}
		} catch (err) {
			return {
				address: "",
				status: "😥 " + err.message
			}
		}
	} else {
		return {
			address: "",
			status: (
				<span>
					<p>
						{" "}
						🦊{" "}
						<a
							href={`https://metamask.io/download`}
							target='_blank'
							rel='noreferrer'
						>
							You must install Metamask, a virtual Ethereum wallet, in your
							browser.
						</a>
					</p>
				</span>
			)
		}
	}
}

export const updateMessage = async (address, message) => {}
