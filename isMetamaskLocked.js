function isMetamaskLocked() {
    window.web3.eth.getAccounts(function(err, accounts) {
       	if(err!==null) {
           	document.getElementById('locked').innerHTML = err
        }
        else if(accounts.length===0) {
       		document.getElementById('locked').innerHTML = 'MetaMask is locked'
           	}
           	else {
               	document.getElementById('locked').innerHTML = 'MetaMask is unlocked'
            }
    });
}