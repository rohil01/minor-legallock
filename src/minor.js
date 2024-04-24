import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x184041B3EBB46c48c321018cdd3Cb8B317FEA27a"
);
 
export default instance;