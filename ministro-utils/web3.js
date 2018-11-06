const pify = require('pify');

const Web3 = require('web3');

const web3 = new Web3(Web3.currentProvider || 'http://localhost:8545');

const ethAsync = pify(web3.eth);

module.exports = {
  ethGetBalance: ethAsync.getBalance,
  ethGetTransactionReceipt: ethAsync.getTransactionReceipt,
};
