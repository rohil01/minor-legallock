import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x3004b7832E55f43951B69a95E57E6Eb2D2941d66"
);
 
export default instance;