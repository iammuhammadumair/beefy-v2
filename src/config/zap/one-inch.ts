import { OneInchZapConfig } from '../../features/data/apis/config-types';

export const zaps: OneInchZapConfig[] = [
  {
    zapAddress: '0xd2154257Ec830610b609b13056340564f85F2f86',
    chainId: 'polygon',
    depositFromTokens: ['MATIC', 'WMATIC', 'USDC', 'USDT', 'DAI', 'ETH', 'WBTC'],
    withdrawToTokens: ['MATIC', 'BIFI', 'USDC', 'USDT', 'DAI', 'ETH', 'WBTC'],
    blockedTokens: [
      'S*USDC',
      'S*USDT',
      'SOLACE',
      'beQI',
      'jCAD',
      'TOMB',
      'cxADA',
      'cxDOGE',
      'jSGD',
      '4EUR',
      'jJPY',
      'jNZD',
    ],
    blockedVaults: [],
  },
  {
    zapAddress: '0x1F4846092FD8B5D0858F3737Ed22D3fc43f1969e',
    chainId: 'fantom',
    depositFromTokens: ['FTM', 'WFTM', 'USDC', 'fUSDT', 'DAI', 'WETH', 'WBTC'],
    withdrawToTokens: ['FTM', 'BIFI', 'USDC', 'fUSDT', 'DAI', 'WETH', 'WBTC'],
    blockedTokens: ['SOLACE', 'binSPIRIT', 'S*USDC', 'USDL', 'FTML'],
    blockedVaults: ['geist-ftm'],
  },
  {
    zapAddress: '0x3983C50fF4CD25b43A335D63839B1E36C7930D41',
    chainId: 'optimism',
    depositFromTokens: ['ETH', 'WETH', 'OP', 'USDC', 'USDT', 'DAI', 'WBTC'],
    withdrawToTokens: ['ETH', 'OP', 'BIFI', 'USDC', 'USDT', 'DAI', 'WBTC'],
    blockedTokens: [
      'SNX-hSNX LP',
      'ETH-hETH LP',
      'DAI-hDAI LP',
      'USDT-hUSDT LP',
      'beVELO',
      'S*USDC',
      'S*ETH',
      'jEUR',
    ],
    blockedVaults: ['aavev3-op-eth'],
  },
  {
    zapAddress: '0xdFCC0FE31568cB3c75A20f41A8fD705BF951538c',
    chainId: 'avax',
    depositFromTokens: ['AVAX', 'WAVAX', 'USDC', 'USDT', 'DAI', 'ETH', 'WBTC'],
    withdrawToTokens: ['AVAX', 'BIFI', 'USDC', 'USDT', 'DAI', 'ETH', 'WBTC'],
    blockedTokens: ['beJOE', 'S*USDC', 'S*USDT', 'AVAXL', 'FIEF'],
    blockedVaults: ['aavev3-avax'],
  },
  {
    zapAddress: '0xef46Ea3e79C2D75A6BCB8BA7a3869d9a6E54258B',
    chainId: 'arbitrum',
    depositFromTokens: ['ETH', 'WETH', 'USDC', 'USDT', 'DAI', 'WBTC'],
    withdrawToTokens: ['ETH', 'BIFI', 'USDC', 'USDT', 'DAI', 'WBTC'],
    blockedTokens: ['S*ETH', 'S*USDC', 'S*USDT', 'FISH'],
    blockedVaults: [],
  },
  {
    zapAddress: '0x60Fe376921e92F9560811Fc96893261a4F79AE5F',
    chainId: 'bsc',
    depositFromTokens: ['BNB', 'WBNB', 'BUSD', 'USDC', 'USDT', 'DAI', 'ETH', 'BTCB'],
    withdrawToTokens: ['BNB', 'BIFI', 'BUSD', 'USDC', 'USDT', 'DAI', 'ETH', 'BTCB'],
    blockedTokens: [
      'beltBTC',
      'beltBNB',
      'beltETH',
      'S*USDT',
      'S*BUSD',
      'TOFY',
      'PALM',
      'sALPACA',
      'ibALPACA',
      'ZBTC',
      'mCOIN',
      'ICA',
      'SWTH',
      'TEN',
      'GOLD',
      'CRUSH',
      'GOLDCOIN',
      'LONG',
      'AURO',
      'pOPEN',
      'GOAL',
      'SALT',
      'FET',
      'jBRL',
      'BRZw',
      'jCHF',
    ],
    blockedVaults: ['venus-bnb', 'venus-wbnb'],
  },
  {
    zapAddress: '0x19b7010d31c4612bB38498ad1dDe16E59a649Fd2',
    chainId: 'aurora',
    depositFromTokens: ['ETH', 'WETH', 'USDC', 'USDT', 'WBTC'],
    withdrawToTokens: ['ETH', 'BIFI', 'USDC', 'USDT', 'WBTC'],
    blockedTokens: [],
    blockedVaults: [],
  },
];
