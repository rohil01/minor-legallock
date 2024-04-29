import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0xFf958b5035Da5e5Ee21D22443e1af7688853175C"
);
 
export default instance2;