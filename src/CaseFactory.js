import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0x9811DF19CA2Ba96314c971E2961B98B3257ec560"
);
 
export default instance2;