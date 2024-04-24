const HDWalletProvider = require("@truffle/hdwallet-provider");
const {Web3} = require("web3");
const minor = require("./build/Minor.json");
const caseFactory = require("./build/CaseFactory.json");
 
const provider = new HDWalletProvider(
  'search shuffle inner gadget trend pluck man poverty pen frequent permit phone',
  'https://sepolia.infura.io/v3/016fd67743cb4ba3aa0de72794fbe4e0'
);


const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log("Attempting to deploy from account", accounts[0]);
 
  const result = await new web3.eth.Contract(minor.abi)
    .deploy({ data: minor.evm.bytecode.object })
    .send({ gas: "1000000", from: accounts[0] });
 
  console.log("Minor Contract deployed to", result.options.address);
  const result2 = await new web3.eth.Contract(caseFactory.abi)
    .deploy({data:caseFactory.evm.bytecode.object})
    .send({gas:"1000000", from:accounts[0]});

  console.log("Case Factory deployed to ", result2.options.address);
  provider.engine.stop();
};

deploy();
