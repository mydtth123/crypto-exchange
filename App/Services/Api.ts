import {CoinProps, SimplePriceProps} from '@app/Screens/Home/Home.props';

export const fetchApi = async (url: string, method: string, body?: any) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

// get simple price from coingecko
export const getCoinPrice = async (
  coins: string,
): Promise<SimplePriceProps> => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=vnd&include_24hr_change=true`;
  const data = await fetchApi(url, 'GET');
  return data;
};

export const getSimpleCoins = async (
  coins: CoinProps[],
  setCoins: (coins: CoinProps[]) => void,
) => {
  const listCoinActive = coins.filter(coin => coin.active);
  const listIds = listCoinActive.map(it => it.cid).join(',');
  const data = await getCoinPrice(listIds);
  if (data) {
    let newData: CoinProps[] = listCoinActive.map(coin => ({
      ...coin,
      change: data[coin.cid].vnd_24h_change,
      currency: data[coin.cid].vnd,
    }));
    setCoins([
      ...newData,
      ...coins.filter(coin => !newData.find(c => c.cid === coin.cid)),
    ]);
  }
};
