function deleteMember() {  // remix simulation - transaction cost: 71671 gas _ execution cost: 48991 gas
    var delete_member = document.getElementById('deletemember').value;
    mycontract.deleteMember(delete_member, function (errerr, result) { });
}