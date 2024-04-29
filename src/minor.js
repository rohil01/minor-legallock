import web3 from './web3'
import minor from './ethereum/build/Minor.json'


const instance = new web3.eth.Contract(
  minor.abi,
  "0x6ae11791e43B0815b4FCB6ceB9ba7Cdc8aC83A6B"
);
 
export default instance;