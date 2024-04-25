import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0x56c248B0ca0a98a6483E61FF7Ed530e944613181"
);
 
export default instance2;