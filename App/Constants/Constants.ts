import {CoinProps} from '@app/Screens/Home/Home.props';

export const COIN_LIST: CoinProps[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    cid: 'bitcoin',
    chain: 'BTC',
    icon: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    amount: Math.floor(Math.random() * 10),
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    cid: 'ethereum',
    chain: 'ETH',
    icon: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    amount: Math.floor(Math.random() * 10),
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
    cid: 'matic-network',
    chain: 'MATIC',
    icon: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
    amount: Math.floor(Math.random() * 10),
  },
];
