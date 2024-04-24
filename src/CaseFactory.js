import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0x506D4789F7d885609483954B2913696ea9861059"
);
 
export default instance2;