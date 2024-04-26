// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
 
contract Minor {
    address public admin;
    struct member {
        uint id;
        string name;
        uint adhaar;
        uint age;
        uint star;
        address add;
    }
    //star==0 judge, 1 lawyer, 2 student and others // -1 admin

    member [] public members;
    constructor() {
        admin = msg.sender;
        member storage newMember= members.push();
        uint memberId= members.length;
        
        newMember.name= "Admin";
        newMember.adhaar=12345678912;
        newMember.age=25;
        newMember.star=3;    
        newMember.id= 1;   
        newMember.add= admin;
        id[admin]= memberId;
    }
    mapping ( address=> uint ) public id;

    function insert(string memory name, uint adhaar, uint age, uint star, address add) public {
        require(msg.sender==admin);
        // id[msg.sender]=0;
        
        member storage newMember= members.push();
        uint memberId= members.length;
        
        newMember.name= name;
        newMember.adhaar=adhaar;
        newMember.age=age;
        newMember.star=star;    
        newMember.id= memberId;   
        newMember.add= add;
        id[add]= memberId;
    }
}   
contract CaseFactory{
    address [] addressArray ;      
    mapping (address => address []) cases; 
    mapping (address => address []) clientcases;           //lawyer address=>array of all case addresses
    uint public caseCnt=1;
    
    function createCase( address clientAddress , uint dateOfFiling) public{
        
        address newCase = address(new Case(caseCnt, msg.sender,  clientAddress,   dateOfFiling));
        cases[msg.sender].push(newCase);   
        clientcases[clientAddress].push(newCase);     //new case is the address of the case contract 
        caseCnt++;
    }
    function returnAddress1(address addr) public view returns(address [] memory) {
        return (cases[addr]);
    } 
    function returnAddress2(address addr) public view returns(address [] memory) {
        return (clientcases[addr]);
    } 
    
}
contract Case{
    uint caseid;
    uint dof;
    address lawyer;
    address client;
    
    struct details{
        uint caseid;
        uint dof;
        address lawyer;
        address client;
    }
    constructor (uint caseID, address lawyerAddress, address clientAddress, uint dateOfFiling){
        lawyer = lawyerAddress;
        client = clientAddress;
        dof = dateOfFiling;
        caseid = caseID;
    }
     function returnDetails()public view returns(details memory) {
        details memory caseDetails;
        caseDetails.lawyer = lawyer;
        caseDetails.client = client;
        caseDetails.dof = dof;
        caseDetails.caseid = caseid;
        return caseDetails;
    }
    
    struct fileDetails{
        string addr;
        uint dateTime;
        address addrUpload;
        bool exist;
    }
    mapping(address => fileDetails)fileMap;
    //array of address;
    string [] public IPFSAdd;
     
    //function to upload files in array
    function fetchAddr() public view returns(string[] memory){
        return IPFSAdd;
    }
    function upload(string memory addr) public returns(fileDetails memory){
        IPFSAdd.push(addr);
        fileDetails memory file; 
        file.addr= addr;
        file.dateTime= block.timestamp;
        file.addrUpload= msg.sender;
        file.exist=true;
        return file;
    }
    
}
