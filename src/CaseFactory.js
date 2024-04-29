import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0xECcBD425279e63704f4df7f9294DFAD0F3E75658"
);
 
export default instance2;