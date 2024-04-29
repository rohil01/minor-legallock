import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0xba6A0C0C50EB8C217f5d7EC3327F9Ee32d706b65"
);
 
export default instance2;