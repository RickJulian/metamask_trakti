    function viewPetitionsHashPerPage() {
        var page = document.getElementById('petitionsHashPerPage_page').value;
        var elements = document.getElementById('petitionsHashPerPage_elements').value;
        mycontract.viewPetitionsHashPerPage(page, elements, function(error, res){
        	if(!error){
            	document.getElementById('petitionsHashPerPageForm_result').innerHTML = res;
            	console.log(res);
            }
            else {
                console.log(error);
            }
        });
    }