// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract CaseFactory{
    address [] addressArray ;      
    mapping (address => address []) cases;          //lawyer address=>array of all case addresses
    uint public caseCnt;
    
    function createCase( address clientAddress , uint dateOfFiling) public{
        caseCnt++;
        address newCase = address(new Case(caseCnt, msg.sender,  clientAddress,   dateOfFiling));
        cases[msg.sender].push(newCase);   
        cases[clientAddress].push(newCase);     //new case is the address of the case contract 
        
    }
    function returnAddress(address addr) public view returns(address [] memory) {
        return (cases[addr]);
    } 
}

contract Case{
    uint caseid;
    uint dof;
    address lawyer;
    address client;
    constructor (uint caseID, address lawyerAddress, address clientAddress, uint dateOfFiling){
        lawyer = lawyerAddress;
        client = clientAddress;
        dof = dateOfFiling;
        caseID = caseid;
        
    }
     struct fileDetails{
        address addr;
        uint dateTime;
        address addrUpload;
        bool exist;
    }
    mapping(address => fileDetails)fileMap;//string ke jgh cid aayega yaani ki address
    //array of address;
    address [] IPFSAdd;
    function insertAddr(address add) public{
        IPFSAdd.push(add);
    }
    //function to upload files in array
    function fetchAddr() public view returns(address[] memory){
        return IPFSAdd;
    }
    function upload(address addr) public view{
        fileDetails memory file; 
        file.addr= addr;
        file.dateTime= block.timestamp;
        file.addrUpload= msg.sender;
        file.exist= true;
    }


}
