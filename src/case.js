import web3 from './web3'
import Case from './ethereum/build/Case.json'
const CaseContract = (address) => {
    return new web3.eth.Contract(
        Case.abi,
        address
    );
}
export default CaseContract