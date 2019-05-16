function isMetamaskInstalled() {
    document.getElementById('installed').innerHTML = window.ethereum.isMetaMask;
}
