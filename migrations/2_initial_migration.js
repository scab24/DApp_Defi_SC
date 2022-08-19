//artifacts: dónde están compilados los contratos
//Recojo de la compilación de los smart contract (en carpeta abi) su información pertinente

const JamToken = artifacts.require('JamToken')
const StellartToken = artifacts.require('StellartToken')
const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(deployer, network, accounts) {

    //DESPLEGMOS CONTRATOS

    //para el despliegue nos fijamos en el constructor de cada uno
    //despliegue del JamToken 
    await deployer.deploy(JamToken)
    const jamToken = await JamToken.deployed()

    //despliegue de StellartToken
    await deployer.deploy(StellartToken)
    const stellartToken = await StellartToken.deployed()

    //despliegue de TokenFarm
    await deployer.deploy(TokenFarm, stellartToken.address, jamToken.address)
    const tokenFarm = await TokenFarm.deployed()

    //compro JamToken para hacer staking a cambio de recompensas en StellartToken

    //Transferir tokens  StellartToken (token de recompensa) a TokenFarm (1 millon de tokens)
    await stellartToken.transfer(tokenFarm.address, '1000000000000000000000000')

    //Transferencia de los tokens para el Staking
    await jamToken.transfer(accounts[1], '100000000000000000000')


}