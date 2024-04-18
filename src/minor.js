import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0xc21a8c6F3926BE5b5856DD4db368a3D7CC54F022"
);
 
export default instance;