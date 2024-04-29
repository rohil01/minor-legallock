import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0xDb21E22aF09679F1305498c0A48dCa86487Fd77e"
);
 
export default instance;