function petitionAsk() {  // remix simulation - transaction cost: 71671 gas _ execution cost: 48991 gas
    var amount = document.getElementById('petitionAskForm_amount').value;
    var reason = document.getElementById('petitionAskForm_reason').value;
    window.web3.eth.getTransactionCount(window.web3.eth.defaultAccount, function(err, txCount) {
        if(!err) {
            petitionAsk_TxParams = {
                from: window.web3.eth.defaultAccount,
                to: address,
                nonce: txCount,
                gasPrice: window.web3.toWei('1', 'gwei'),
                gasLimit: window.web3.toWei('155000', 'gwei'),
                data: mycontract.petitionAsk(amount, reason, function(errerr, result) {}),
            }
            window.web3.eth.sendTransaction(petitionAsk_TxParams, function(error, TxHash) {
                if(!error) {
                    document.getElementById('petitionAskForm_result').innerHTML = 'TxHash: ' + TxHash;
                    console.log('TxHash: ' + TxHash);
                } else {
                    document.getElementById('petitionAskForm_result').innerHTML = 'error: ' + error;
                    console.log('error: ' + error);
                }
            })
        } else {
            document.getElementById('petitionAskForm_result').innerHTML = 'err: ' + err;
            console.log('err: ' + err);
        }
    })
}

// 100000000000000000 test account2 --> 0x03831d8fe1aace660af9d514c75215527933e7864cb7ca99524b967f9e0a552d