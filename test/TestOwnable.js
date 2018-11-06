const Ownable = artifacts.require('Ownable');
const OwnableUtil = require('./ministro-contracts/proxyOwnable');

const proxyOwnable = OwnableUtil();

contract('Ownable', (accounts) => {
  beforeEach(async () => {
    const instance = await Ownable.new({ from: accounts[0] });

    proxyOwnable.setInstanceVar(instance);
  });


  it('should be possible to change owner', async () => {
    await proxyOwnable.transferOwnership(accounts[1], { from: accounts[0] });
  });

  it('should be NOT possible to change owner from invalid account', async () => {
    await proxyOwnable.transferOwnership(accounts[1], { from: accounts[1] }, true);
  });
});
