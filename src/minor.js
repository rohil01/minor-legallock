import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0xF2ed906D6099fE729aed08fD8ce857b45f66dD46"
);
 
export default instance;