const ADDRESSES = require('./helper/coreAssets.json')
const { sumTokensExport } = require('./helper/unwrapLPs');

const minedTokens = {
  'cake': '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  'busd': ADDRESSES.bsc.BUSD,
  'matic': ADDRESSES.null,
  'ftm': ADDRESSES.null,
  'avax': ADDRESSES.null,
  'usdc': ADDRESSES.polygon.USDC, // polygon
  'doge': '0xba2ae424d960c26247dd6c32edc70b295c744c43', // bsc
  'eth': ADDRESSES.bsc.ETH   // bsc
};
const minerContracts = {
  'cake': '0xD5d38f1815b4555527DE075a584268E08c5909EA',
  'busd': '0xe5973C042Cda75Dacd7bF36B3E7C7F1Ea2980A25',
  'matic': '0xf08665261ef76E56e732c711330e905020E445DA',
  'ftm': '0x69e7D335E8Da617E692d7379e03FEf74ef295899',
  'avax': '0x0c01328A0D8E996433Dd9720F40D896089eb966D',
  'usdc': '0xFF53b9822E114c0AE46cBdE4F7b4C642f8F9bbAA', // polygon
  'doge': '0x026d814935a053D10abA9987e4D047Aa9369c97E', // bsc
  'eth': '0x212A3A41a0e58CCdc86F013b003d4afF805a958c'   // bsc
};

const config = {
  bsc: {
    keys: ['cake', 'eth', 'doge', 'busd'],
  },
  polygon: {
    keys: ['matic', 'usdc'],
  },
  fantom: {
    keys: ['ftm'],
  },
  avax: {
    keys: ['avax'],
  },
}

module.exports = {};

Object.keys(config).forEach(chain => {
  const { keys } = config[chain]
  const owners = keys.map(i => minerContracts[i])
  const tokens = keys.map(i => minedTokens[i])
  module.exports[chain] =  { tvl: sumTokensExport({ tokensAndOwners2: [tokens, owners], })}
})