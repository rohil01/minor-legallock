import Web3 from 'web3';

let web3;

// Function to initialize Web3

    // Check if Web3 is injected by MetaMask
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
        // MetaMask is installed
        web3 = new Web3(window.ethereum);
    } else {
        // MetaMask is not installed, show error message
        console.error('MetaMask is not installed or not detected.'); //show in page
        // Fallback to local provider
        const provider = new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/0fccb03fc04448f0a6cf2e8ee8d9c990'); // You can change this to your desired Ethereum node URL
        web3 = new Web3(provider);
    }

 

export default web3;
