import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x0897ef0bA1C5683e0fab18581B7D31462fBe8644"
);
 
export default instance;