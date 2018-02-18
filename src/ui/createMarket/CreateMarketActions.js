import MarketsContract from '../../../build/contracts/Markets.json'
// import { loginUser } from '../loginbutton/LoginButtonActions'
import { browserHistory } from 'react-router'
import store from '../../store'

const contract = require('truffle-contract')

export function createMarket(risk) {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      // Using truffle-contract we create the authentication object.
      const markets = contract(MarketsContract)
      markets.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions on Authentication.
      var marketsInstance

      // Get current ethereum wallet.
      web3.eth.getCoinbase((error, coinbase) => {
        // Log errors, if any.
        if (error) {
          console.error(error);
        }

        console.log('risk');
        console.log(risk);

        markets.deployed().then(function(instance) {
          marketsInstance = instance

          // Attempt to sign up user.
          marketsInstance.createMarket(risk, {from: coinbase})
          .then(function(result) {
            // If no error, login user.
            return browserHistory.push('/markets')
          })
          .catch(function(result) {
            // If error...
          })
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
