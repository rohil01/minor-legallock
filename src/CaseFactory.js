import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0xf6389b7360f6071D7bc8FFa40A280fC470bBA18f"
);
 
export default instance2;