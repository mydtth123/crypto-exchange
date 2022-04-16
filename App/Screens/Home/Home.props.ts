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
  amount?: number;

  /**
   * Currency of the coin
   */
  currency?: number;

  /**
   * 24 hour change of the coin
   */
  change?: number;

  /**
   * Is the coin active
   */
  active: boolean;
}

export interface ExchangeProps {
  vnd: number;
  vnd_24h_change: number;
}

export interface SimplePriceProps {
  [key: string]: ExchangeProps;
}
