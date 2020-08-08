const { BN, ether, expectEvent, expectRevert, time } = require('@openzeppelin/test-helpers');

const Token = artifacts.require("./contracts/Token.sol");

contract('Token', async (accounts) => {
  const owner = accounts[0]
  const user1 = accounts[1]
  const user2 = accounts[2]
  
  beforeEach('set up Token contract for each test', async () => {
    tokenInstance = await Token.new(1000)
  });

  describe("contract", async () => {
  
    it('should have the correct name and symbol', async () => {
      let name = 'SyracuseToken'
      let symbol = 'SUT'
      callName = await tokenInstance.name();
      callSymbol = await tokenInstance.symbol();
      assert.equal(callName, name);
      assert.equal(callSymbol, symbol);
    });
    it('should mint 1000 tokens', async () => {
      tokenAmount = await tokenInstance.totalSupply();
      assert.equal(tokenAmount, 1000);
    });
    it('should mint 1000 tokens for owner', async () => {
      ownerBalance = await tokenInstance.balanceOf(owner);
      assert.equal(ownerBalance, 1000);
    });
    it('should mint 100 tokens for user1', async () => {
      await tokenInstance.buy(100, {from : user1});
      userBalance = await tokenInstance.balanceOf(user1);
      assert.equal(userBalance, 100);
    });

  });
});
 