import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x6D77d0c128Ca83C5F119C77C127E2d624FE0BDd2"
);
 
export default instance;