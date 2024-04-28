import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0x152e84E11fd37Dc0B5bD5fa359C2D3F9Af59f42D"
);
 
export default instance2;