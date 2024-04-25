import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0x36405175C193326CB83619a297Ad2811Ecf2b513"
);
 
export default instance2;