import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0xA5212A51c22e9fA9A3585eE14484d9dEcc104a19"
);
 
export default instance;