import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0xBf99db926462fCAbC28d1b16F0fADef13Fb7e8F4"
);
 
export default instance;