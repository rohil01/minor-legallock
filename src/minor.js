import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x96620aF6B9A30Ad95cc27D3EdFe96937C2DD0DFB"
);
 
export default instance;