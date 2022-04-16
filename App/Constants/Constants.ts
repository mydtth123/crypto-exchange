import {CoinProps} from '@app/Screens/Home/Home.props';

export const COIN_LIST: CoinProps[] = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    cid: 'bitcoin',
    chain: 'BTC',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: true,
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    cid: 'ethereum',
    chain: 'ETH',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: true,
  },
  {
    symbol: 'MATIC',
    name: 'Polygon',
    cid: 'matic-network',
    chain: 'MATIC',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: true,
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    cid: 'binancecoin',
    chain: 'BNB',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: false,
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    cid: 'dogecoin',
    chain: 'DOGE',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/doge/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: false,
  },
  {
    symbol: 'AION',
    name: 'Aion',
    cid: 'aion',
    chain: 'AION',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/aion/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: false,
  },
  {
    symbol: 'ALGO',
    name: 'Algorand',
    cid: 'algorand',
    chain: 'ALGO',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/algorand/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: false,
  },
  {
    symbol: 'AE',
    name: 'Aeternity',
    cid: 'aeternity',
    chain: 'AE',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/aeternity/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: false,
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash',
    cid: 'bitcoin-cash',
    chain: 'BCH',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoincash/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: false,
  },
  {
    symbol: 'CLO',
    name: 'Callisto Network',
    cid: 'callisto',
    chain: 'CLO',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/callisto/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: false,
  },
  {
    symbol: 'CELO',
    name: 'Celo',
    cid: 'celo',
    chain: 'CELO',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/celo/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: false,
  },
  {
    symbol: 'DASH',
    name: 'Dash',
    cid: 'dash',
    chain: 'DASH',
    icon: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/dash/info/logo.png',
    amount: Math.floor(Math.random() * 10),
    active: false,
  },
];

export const formatMoney = (
  amount: number,
  decimalCount = 2,
  decimal = '.',
  thousands = ',',
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      // @ts-ignore
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
      10,
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          // @ts-ignore
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
};
