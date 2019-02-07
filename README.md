# Ministro Tool for Ministro Contract

JavaScript tool created for helping in process of testing solidity smart contracts.

## What MinistroTool is?

Short answer: it is a tool that helps you create ministro contract.  
Now let's explain what Ministro contract is.

When you testing solidity contracts, you have a lot of repeated code like:
 
 ```
 it('should do something', () => {
   await instance.foo()
   assert(foo)
 }
 
 it('should do something again', () => {
   await instance.foo()
   assert(foo)
 }
 ```
 
 Once you tested your `foo()` in one scenario, in most cases you not checking it 
 next time, you using `foo()` (in some other scenarios...) - and this is not good.
 
 *MinistroContract* allows you to write test conditions once and use them
 in each case scenario with just one line of code.  
 Thanks to this, your tests are very strong, easy to understand
  and you have clean, short code.
 
 ## How can I use ministro tool/contract?
 
 The best way to understand how to use it, is to review the simple example in `test` directory.
 
 Basically you need to create `ministroContract` that reflect all methods 
 that real smart contract has.  
 Each `ministroContract` must have all methods from smart contract (including public readers).
 Each method must have all possible test you can perform base 
 **ONLY (!)** on input (arguments) and output (events, return values) data.  
 You also must cover scenario, when method throw (if this is a case).
 
 When you do all that, you just execute a method on `ministroContract`
 and ech time you do it in your tests scenarios, all this tests that you wrote 
 (in ministro method) will be executed and checked.
 
 There are also some additional helpers mechanisms here like:
 * checking is transaction was successful or throw
 * read all events for transaction
 
 ### Ministro Methods
  
 Each ministro method must have:
 * parameters that are equal to smart contract instance (required)
 * object with transaction parameters (optional)
 * parameter that inform us, if this execution is expected to throw (optional)
 
 ## How to use it in tests? 
 
 Please review the code of example `test/ministro-contracts/ministroOwnable.js` - 
  its pretty simple, so you should be able to understand how to use it.
 
 **Note:** this test might not be enough for each cases, if some external 
 data are present and ministro contract do not have access to them, 
 you need to check them directly in test file (outside ministro).
 
 **DO NOT** modify ministro by adding additional params to the method, 
 because this is not how it should work.  
 **MinistroContract test should be the same for ALL cases** and they should
 work the same each time, so anybody can use it in any scenario 
 and not worry abut *your special case*. 
 
 ## Installation
 
```
git clone <this-repo>
git hf init
npm install
```

### Run test

```
npm run lint
npm run test
```
