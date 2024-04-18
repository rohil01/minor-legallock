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