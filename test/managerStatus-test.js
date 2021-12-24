import { BN, fromWei, toWei } from 'web3-utils'
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'
import ether from './helpers/ether'
import EVMRevert from './helpers/EVMRevert'
import { duration } from './helpers/duration'
import latestTime from './helpers/latestTime'
import advanceTimeAndBlock from './helpers/advanceTimeAndBlock'

const BigNumber = BN
const buf2hex = x => '0x'+x.toString('hex')

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should()

const ETH_TOKEN_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'


// real contracts
const SmartFundETH = artifacts.require('./core/funds/SmartFundETH.sol')
const PermittedAddresses = artifacts.require('./core/verification/PermittedAddresses.sol')
const MerkleWhiteList = artifacts.require('./core/verification/MerkleTreeTokensVerification.sol')
const ManagerStatus = artifacts.require('./core/storage/ManagerStatus')

// mock
const Token = artifacts.require('./tokens/Token')
const ExchangePortalMock = artifacts.require('./portalsMock/ExchangePortalMock')
const CoTraderDAOWalletMock = artifacts.require('./CoTraderDAOWalletMock')
const OneInch = artifacts.require('./OneInchMock')
const FlashLoanTakeCutAtack = artifacts.require('./FlashLoanTakeCutAtack')


// Tokens keys converted in bytes32
const TOKEN_KEY_CRYPTOCURRENCY = "0x43525950544f43555252454e4359000000000000000000000000000000000000"

// Contracts instance
let DAI,
    exchangePortal,
    smartFundETH,
    BNT,
    permittedAddresses,
    oneInch,
    merkleWhiteList,
    MerkleTREE,
    COT_DAO_WALLET,
    flashLoanTakeCutAtack,
    managerStatus



contract('Manager statuses ', function([userOne, userTwo, userThree]) {

  async function deployContracts(successFee=1000){
    oneInch = await OneInch.new()

    COT_DAO_WALLET = await CoTraderDAOWalletMock.new()

    BNT = await Token.new(
      "Bancor Newtork Token",
      "BNT",
      18,
      toWei(String(100000000))
    )

    DAI = await Token.new(
      "DAI Stable Coin",
      "DAI",
      18,
      toWei(String(100000000))
    )

    // Create MerkleTREE instance
    const leaves = [
      BNT.address,
      DAI.address,
      ETH_TOKEN_ADDRESS
    ].map(x => keccak256(x)).sort(Buffer.compare)

    MerkleTREE = new MerkleTree(leaves, keccak256)

    // Deploy merkle white list contract
    merkleWhiteList = await MerkleWhiteList.new(MerkleTREE.getRoot())

    // Deploy exchangePortal
    exchangePortal = await ExchangePortalMock.new(
      1,
      1,
      DAI.address,
      merkleWhiteList.address
    )

    permittedAddresses = await PermittedAddresses.new(
      exchangePortal.address,
      DAI.address
    )

    // Deploy ETH fund
    smartFundETH = await SmartFundETH.new(
      userOne,                                      // address _owner,
      'TEST ETH FUND',                              // string _name,
      successFee,                                   // uint256 _successFee,
      COT_DAO_WALLET.address,                               // address _platformAddress,
      exchangePortal.address,                       // address _exchangePortalAddress,
      permittedAddresses.address,
      true                                          // verification for trade tokens
    )

    managerStatus = await ManagerStatus.new()
  }

  beforeEach(async function() {
    await deployContracts()
  })

  describe('Update manager statuses', function() {
    it('Not owner of fund can not update mananer status', async function() {
      await managerStatus.updateStatus(smartFundETH.address, "New status", { from:userTwo })
      .should.be.rejectedWith(EVMRevert)
    })

    it('Owner of fund can update mananer status', async function() {
      console.log("Previos status ", await managerStatus.statuses(smartFundETH.address))
      await managerStatus.updateStatus(smartFundETH.address, "New status")
      console.log("New status ", await managerStatus.statuses(smartFundETH.address))
    })
  })
  //END
})
