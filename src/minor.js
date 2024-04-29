import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x35123ad8f1fA383978d203201701af657f8bc721"
);
 
export default instance;