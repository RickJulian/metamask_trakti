const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "member",
				"type": "address"
			}
		],
		"name": "deleteMember",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "getDonationHash",
				"type": "bytes32"
			}
		],
		"name": "getDonation",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "pagenumber",
				"type": "uint256"
			},
			{
				"name": "itemsperpage",
				"type": "uint256"
			}
		],
		"name": "viewPetitionsHashPerPage",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "applicant",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "reason",
				"type": "string"
			}
		],
		"name": "checkPetition",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCommitteeMembersList",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "committeeOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "reason",
				"type": "string"
			}
		],
		"name": "petitionAsk",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "member",
				"type": "address"
			}
		],
		"name": "addMember",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "checkHash",
				"type": "bytes32"
			}
		],
		"name": "checkPetitionByHash",
		"outputs": [
			{
				"name": "applicant",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "reason",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "petitionHash",
				"type": "bytes32"
			}
		],
		"name": "votePetition",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "person_asking",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "donation",
				"type": "uint256"
			}
		],
		"name": "donationDone",
		"type": "event"
	}
	]
    const address = '0x036f76ecc2b8a5934951860db77a8614d73e61c2';    
	const contract = web3.eth.contract(abi, address);
    