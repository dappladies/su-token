const { BN, ether, expectEvent, expectRevert, time } = require('@openzeppelin/test-helpers')

const Token = artifacts.require("./contracts/Token.sol")

contract('Token', async (accounts) => {
  const owner = accounts[0]
  const user1 = accounts[1]
  const user2 = accounts[2]
  
  beforeEach('set up Token contract for each test', async () => {
    tokenInstance = await Token.new(1000)

  })

  describe("contract setup", async () => {
  
    it('should have the correct name and symbol', async () => {
      let name = 'SyracuseToken'
      let symbol = 'SUT'
      callName = await tokenInstance.name()
      callSymbol = await tokenInstance.symbol()
      assert.equal(callName, name)
      assert.equal(callSymbol, symbol)
    })

  })

  describe("token issuance", async () => {

    it('should emit an event when tokens have been issued', async () => {
      let { tx } = await contributionInstance.contribute({from: user1, value: testAmount})
      await expectEvent.inTransaction(tx, tokenInstance, 'TokensIssued', { amount: testAmount.mul(TOKENS_PER_ETH_DONATED), recipient: user1 })
    })
  
  })



})
 