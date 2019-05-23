    function checkPetitionByHash() {
        var hash;
        hash = document.getElementById('petitionhash').value;
    	mycontract.checkPetitionByHash(hash, function(error, res){
        	if(!error){
            	document.getElementById('petitionhash_result').innerHTML = res;
            	console.log(res);
            }
            else {
                console.log(error);
            }
        });
    }