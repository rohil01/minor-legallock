// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
pragma experimental ABIEncoderV2;

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
    mapping(uint => address) public user;
    member [] public members;
    constructor() {
        admin = msg.sender;
        member storage newMember= members.push();
        uint memberId= members.length;
        newMember.name= "Admin";
        newMember.adhaar=123412341234;
        newMember.age=25;
        newMember.star=4;    
        newMember.id= 1;   
        newMember.add= admin;
        id[admin]= memberId;
    }
    mapping ( address=> uint ) public id;

    function insert(string memory name, uint adhaar, uint age, uint star, address add) public {
        require(msg.sender==admin);
        // id[msg.sender]=0;
        user[adhaar]=add;
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
    mapping (address => address []) cases; //judges ke address ko accesss krne ke liye
    mapping (address => address []) clientcases;    
    address [] public admin;
    function returnAdmin() public view returns(address [] memory)
    {
        return admin;
    }
           //lawyer address=>array of all case addresses
    uint public caseCnt=1;
    address [] public judges;
    mapping(address=> address[]) public judgecases;
    mapping(address=> address) public CaseToJudge;
    function createCase( address clientAddress , uint dateOfFiling) public{
        address newCase = address(new Case(caseCnt, msg.sender,  clientAddress,   dateOfFiling));
        cases[msg.sender].push(newCase);   
        clientcases[clientAddress].push(newCase);
        admin.push(newCase);     //new case is the address of the case contract 
        caseCnt++;
    }
    function assignJudge(address j, address c) public {
        CaseToJudge[c]=j;
        judgecases[j].push(c);
    } 
    function returnAddress1(address addr) public view returns(address [] memory) {
        return (cases[addr]);
    } 
    function returnAddress2(address addr) public view returns(address [] memory) {
        return (clientcases[addr]);
    } 
    
}
contract Case{
    struct details{
        uint caseid;
        uint dof;
        address lawyer;
        address client;
    }
    details public newdetails;
    constructor (uint caseID, address lawyerAddress, address clientAddress, uint dateOfFiling){
        newdetails.lawyer = lawyerAddress;
        newdetails.client = clientAddress;
        newdetails.dof = dateOfFiling;
        newdetails.caseid = caseID;
    }
    struct fileDetails{
        string addr;
        uint dateTime;
        address addrUpload;
        bool exist;
    }
    fileDetails [] file;
    mapping(address => fileDetails)fileMap;//string ke jgh cid aayega yaani ki address
    //array of address;
    string [] public IPFSAdd;

    function fetchAddr() public view returns(string [] memory){
        return IPFSAdd; 
    }
    function upload(string memory addr) public {
        fileDetails memory files= file.push();
        files.addr= addr;
        files.dateTime= block.timestamp;
        files.addrUpload= msg.sender;
        files.exist=true;
        IPFSAdd.push(addr);
    }
}
