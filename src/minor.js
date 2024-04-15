import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x09D2eA5F27CDd671250FdF2bb733f64A85f1B4D3"
);
 
export default instance;