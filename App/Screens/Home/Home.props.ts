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
  currency?: string;

  /**
   * 24 hour change of the coin
   */
  change?: number;
}
