export interface CoinProps {
  /**
   * The coin's symbol.
   */
  symbol: string;

  /**
   * The coin's cid.
   */
  cid: string;

  /**
   * The coin's chain.
   */
  chain: string;

  /**
   * Icon of the coin
   */
  icon: string;

  /**
   * Name of the coin
   */
  name: string;

  /**
   * Amount of the coin
   */
  amount: number;

  /**
   * Vnd of the coin
   */
  vnd?: number;

  /**
   * vnd_24h_change of the coin
   */
  vnd24hChange?: number;

  /**
   * USD of the coin
   */
  usd?: number;

  /**
   * usd_24h_change of the coin
   */
  usd24hChange?: number;

  /**
   * Is the coin active
   */
  active: boolean;
}

export interface ExchangeProps {
  vnd: number;
  vnd_24h_change: number;
  usd: number;
  usd_24h_change: number;
}

export interface SimplePriceProps {
  [key: string]: ExchangeProps;
}
