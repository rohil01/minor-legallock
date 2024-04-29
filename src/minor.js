import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x16d1861218A484191B9bd43C8cA0dF7E9404DfcF"
);
 
export default instance;