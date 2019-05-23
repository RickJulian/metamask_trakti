function getDonation() {  // remix simulation - transaction cost: 23774 gas _ execution cost: 24164 gas
    var donationhash = document.getElementById('getdonation').value;
    mycontract.getDonation(donationhash, function (errerr, result) {
        if (!errerr) {
            document.getElementById('getdonation_result').innerHTML = 'result: ' + result;
            console.log('result: ' + result);
        } else {
            document.getElementById('getdonation_result').innerHTML = 'errerr: ' + errerr;
            console.log('errerr: ' + errerr);
        }
    });
}