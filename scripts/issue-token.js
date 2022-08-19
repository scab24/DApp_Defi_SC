//Emisión tokens de recompensa

const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(callback) {
    let tokenFarm = await TokenFarm.deployed()
    await tokenFarm.issueTokens()

    console.log('Tokens emitidos!')
    callback()
}