    function getCommitteeMembers() {
    	contract.getCommitteeMembersList(function(error, res){
        	if(error){
            	console.log(error);
            }
            else {
            	console.log(res);
            }
        });
    }
