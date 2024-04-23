import web3 from './web3'
import file from './ethereum/build/File.json'


const instance2 = new web3.eth.Contract(
  file.abi,
  "0xfF10B8f8810CC7e16cf0d692bD08A4Cf71eC2Ebd"
);
 
export default instance2;