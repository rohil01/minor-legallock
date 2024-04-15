// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
 
contract Minor {
    address public manager;
    struct member {
        string name;
        uint adhaar;
        uint age;
        uint star;
    }
    //star==0 judge, 1 lawyer, 2 student and others

    member [] public members;
    constructor() {
        manager = msg.sender;
    }
    function status(string memory name, uint adhaar, uint age, uint star) public {
        require(msg.sender==manager);
        member memory newMember= member(name, adhaar, age , star);
        members.push(newMember);
    }
    
}   