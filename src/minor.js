import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0xAe0094f91cc8C8d70886A2F863A11beB57e1e60C"
);
 
export default instance;