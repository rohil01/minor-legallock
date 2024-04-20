import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0xFE7C58f4F5C932BAbEE06B78b5356e67c22c33D6"
);
 
export default instance;