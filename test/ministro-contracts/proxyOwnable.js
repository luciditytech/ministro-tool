import { assert } from 'chai';

import ministroExecute from '../../ministro-utils';


// NOTICE: THIS IS ONLY EXAMPLE - NOT ALL METHODS OF Ownable.sol ARE IMPLEMENTED HERE


function ProxyContract() {
  const app = {};


  /* eslint-disable-next-line */
  app.__proto__ = ministroExecute();

  // remember - this is async method
  app.owner = () => app.instance.owner.call();


  app.transferOwnership = async (newOwner, _txAttr, _expectThrow) => {
    const txAttr = app.getTxAttr(_txAttr);

    // create action command
    const action = () => app.instance.transferOwnership(newOwner, txAttr);

    // run `executeAction` - pay attention on additional attributes like:
    // logCount, eventName, expectThrow
    const results = await app.executeAction(action, txAttr, 1, 'OwnershipTransferred', _expectThrow);

    //  perform tests
    if (!_expectThrow) {
      // we should have event
      assert.exists(results.OwnershipTransferred, 'missing OwnershipTransferred event');
      const [ownershipTransferred] = results.OwnershipTransferred;

      // check event values

      assert.strictEqual(ownershipTransferred.previousOwner, txAttr.from, 'invalid previousOwner');
      assert.strictEqual(ownershipTransferred.newOwner, newOwner, 'invalid newOwner');

      // let's check it on blockchain

      const owner = await app.owner();
      assert.strictEqual(owner, newOwner, 'new owner is not saved on blockchain');
    }

    return results;
  };

  return app;
}

module.exports = ProxyContract;
