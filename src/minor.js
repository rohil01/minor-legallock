import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x90fBE271DCEcd7BE28c8cd5CA4c61A66aef55D6E"
);
 
export default instance;