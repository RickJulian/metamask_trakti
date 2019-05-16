var myaddress;
function getAddressBalance() {
	window.web3.eth.getAccounts(function(error, accounts) {
   		if(!error) {
            myaddress = accounts[0];
       		try {
       			window.web3.eth.getBalance(myaddress, function (error, wei) {
               		if (!error) {
                   		balance = web3.fromWei(wei, 'ether');
                        document.getElementById("account_balance").innerHTML = balance + " ETH";
               		}
       			});
       		} catch (err) {
           	document.getElementById("account_balance").innerHTML = err;
       		}
   		}
   	})
}