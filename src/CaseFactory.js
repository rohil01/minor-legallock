import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0x339E0EE08d42E056d8F53CCd6f9A0dC65b3D6eeb"
);
 
export default instance2;