import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0x30E87475b5E51cE25ff1a8907D93B06279ab5bFA"
);
 
export default instance2;