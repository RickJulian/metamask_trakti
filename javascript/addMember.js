function addMember() {  // remix simulation - transaction cost: 71671 gas _ execution cost: 48991 gas
	var new_member = document.getElementById('newmember').value;
	var myaddress;
	window.web3.eth.getAccounts(function(error, accounts) {
		if(!error) {
			myaddress = accounts[0];
			document.getElementById('newmember_result').innerHTML = window.web3.eth.toString(myaddress);
			console.log(window.web3.eth.toString(myaddress));
		}
	})

    window.web3.eth.getTransactionCount(myaddress, (err, txCount) => {
	    addMember_txparams: [{
            to: address,	// default contract address
		    nonce: txCount,
		    gasLimit: window.web3.toHex('100000'),
            gasPrice: window.web3.toHex(web3.toWei('1', 'gwei')),
		    data: mycontract.addMember(new_member).encodeABI()
		}];
		console.log("Encoded data: ", window.web3.eth.toString(raw_addMember.data));
		if (err !== null) {console.log(err)}
		else {
			window.web3.ethereum.send({
				method: 'eth_sendTransaction',
				params: addMember_txparams,
				from: myaddress
			}, function(err, transactionHash) {
				if (!err) {
				  console.log('TX hash: ' + transactionHash);
				  document.getElementById('addMember_result').innerHTML = 'TX hash: ' + transactionHash
				} else {
				  console.log('Error: ' + err);
				  document.getElementById('addMember_result').innerHTML = 'Error: ' + err
				}
			});
		}
	})
}



/*
const raw_addMember = {
		    to: address,
		    nonce: txCount,
		    gasLimit: web3.utils.toHex('100000'),
		    gasPrice: web3.utils.toHex(web3.utils.toWei('1', 'gwei')),
		    data: donationCommittee_contract.methods.addMember(new_member).encodeABI()
	    }
	    console.log("Encoded data: ", raw_addMember.data);
	
	    const tx_addMember = new Tx(raw_addMember);
	    tx_addMember.sign(privateKey_1);
	    const serialized_tx_addMember = tx_addMember.serialize();
	    const raw_serialized_tx_addMember = '0x' + serialized_tx_addMember.toString('hex');
	    console.log("Serialized: ", raw_serialized_tx_addMember);

	    web3.eth.sendSignedTransaction(raw_serialized_tx_addMember, function(err, hash) {
            if (!err) {
                console.log('Tx sent and hash is: '+hash);
            }
            else {
			    console.error(err);
		    }
        })
*/