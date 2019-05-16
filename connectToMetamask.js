function connectToMetamask() {
    /*try {
        accounts = await window.ethereum.enable();
        console.log(accounts);
      } catch (error) {
        // Handle error. Likely the user rejected the login:
        console.log(reason === "User rejected provider access")
      }*/
      ethereum.enable();
}