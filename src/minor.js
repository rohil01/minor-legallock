import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0xA25374eD48cA3683baD87c9f5FbACb3247F5a683"
);
 
export default instance;