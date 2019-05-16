//const rpcURL = 'https://ropsten.infura.io/v3/cdfc28132ab54a9dbabb793a7c01029c'
var Web3;

window.addEventListener('load', function() {
    if (typeof window.web3 !== 'undefined' || typeof window.ethereum !== 'undefined') {
      // Use Mist/MetaMask's provider
      window.web3 = new Web3(window.web3.currentProvider);
      document.getElementById('node').innerHTML = web3.currentProvider.constructor.name;
    } else {
      console.log('No web3? You should consider trying MetaMask!')
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  
    // Now you can start your app & access web3 freely:
    //startApp()
})