import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0xA5769C002dF765bA8f2d6f7c535fe4F8c35FCcC7"
);
 
export default instance;