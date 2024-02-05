const { sumTokens2, nullAddress } = require('../helper/unwrapLPs')

const contract = "0x0e22B5f3E11944578b37ED04F5312Dfc246f443C"

async function tvl(time, ethBlock, _b, {api}) {
  return sumTokens2({ tokens: [nullAddress], owner: contract, api })
}

module.exports = {
  methodology: `We count the ETH on ${contract}`,
  base: {
    tvl
  }
}
