const pify = require('pify');

const Web3 = require('web3');

const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

module.exports = {
  ethGetBalance: pify(web3.eth.getBalance),
  ethGetTransactionReceipt: pify(web3.eth.getTransactionReceipt),
};
