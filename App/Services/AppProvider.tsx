import React, {useMemo, useState} from 'react';
import {COIN_LIST} from '@app/Constants/Constants';
import {CoinProps} from '@app/Screens/Home/Home.props';

export const AppContext = React.createContext<{
  coins: CoinProps[];
  setCoins: (coins: CoinProps[]) => void;
}>({
  coins: COIN_LIST,
  setCoins: () => {},
});

const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [coins, setCoins] = useState<CoinProps[]>(COIN_LIST);
  const value = useMemo(() => ({coins, setCoins}), [coins]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
