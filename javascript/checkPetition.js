function checkPetition() {
    var petitioner = document.getElementById('checkPetition_petitioner').value;
    var amount = document.getElementById('checkPetition_amount').value;
    var reason = document.getElementById('checkPetition_reason').value;
    mycontract.checkPetition(petitioner, amount, reason, function(error, res){
        if(!error){
            document.getElementById('checkPetitionForm_result').innerHTML = res;
            console.log(res);
        }
        else {
            console.log(error);
        }
    });
}