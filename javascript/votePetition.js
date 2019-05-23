function votePetition() {  // remix simulation - transaction cost: 66366 gas _ execution cost: 42982 gas
    var petitionhash = document.getElementById('newmember').value;
    window.web3.eth.getTransactionCount(window.web3.eth.defaultAccount, function (err, txCount) {
        if (!err) {
            votePetition_TxParams = {
                from: window.web3.eth.defaultAccount,
                to: address,
                nonce: txCount,
                gasPrice: window.web3.toWei('1', 'gwei'),
                gasLimit: window.web3.toWei('100000', 'gwei'),
                data: mycontract.votePetition(petitionhash, function (errerr, result) { }),
            }
            window.web3.eth.sendTransaction(votePetition_TxParams, function (error, TxHash) {
                if (!error) {
                    document.getElementById('votepetition_result').innerHTML = 'TxHash: ' + TxHash;
                    console.log('TxHash: ' + TxHash);
                } else {
                    document.getElementById('votepetition_result').innerHTML = 'error: ' + error;
                    console.log('error: ' + error);
                }
            })
        } else {
            document.getElementById('votepetition_result').innerHTML = 'err: ' + err;
            console.log('err: ' + err);
        }
    })
}