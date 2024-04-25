import web3 from './web3'
import CaseFactory from './ethereum/build/CaseFactory.json'


const instance2 = new web3.eth.Contract(
  CaseFactory.abi,
  "0xcEdB219D2e7a19B214136e7483DAb3Cdf6CFaf24"
);
 
export default instance2;