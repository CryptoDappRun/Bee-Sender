var SmartContractABI = [
	{
		"inputs": [
			{
				"internalType": "address payable[]",
				"name": "addrs",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_Referrer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_ReferrerFee",
				"type": "uint256"
			}
		],
		"name": "multiSender",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_AllowReffer",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minReferrerFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxReferrerFee",
				"type": "uint256"
			}
		],
		"name": "SetFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			}
		],
		"name": "TransferETH",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_Owner",
				"type": "address"
			}
		],
		"name": "TransferOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_receiver",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			}
		],
		"name": "TT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minReferrerFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxReferrerFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_AddressLimit",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_AllowReffer",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "AddressLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "AllowReffer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lock",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxReferrerFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "minReferrerFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var SmartContractAddress = "0xEBC485c1d0F4B214884faa44C8d086509e7363B7"; 

