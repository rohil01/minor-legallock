import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0x0838978AaD72Ba3f2E18C069282604f22A37FFA6"
);
 
export default instance2;