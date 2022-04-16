import React, {FC, useCallback, useContext, useEffect, useState} from 'react';
import {FlatList, Image, ListRenderItem, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '@app/Navigation/AppNavigation';

import {Screen, TextField} from '@app/Components';
import {getSimpleCoins} from '@app/Services/Api';
import {AppContext} from '@app/Services/AppProvider';
import {CoinProps} from '../Home/Home.props';
import styles from '@app/Screens/CoinsModal/CoinsModal.styles';
import {Switch} from '@app/Components/Switch/Switch';

export const CoinsModalScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'home'>
> = () => {
  const {coins, setCoins} = useContext(AppContext);
  const [search, setSearch] = useState<string>('');
  const [list, setList] = useState<CoinProps[]>([]);

  useEffect(() => {
    const newList = coins.sort((a, b) => {
      if (a.active && !b.active) {
        return -1;
      }
      if (!a.active && b.active) {
        return 1;
      }
      return 0;
    });

    setList(newList);
  }, []);

  const onSwitchToggle = useCallback(
    (value: boolean, cid: string) => {
      const newCoins = coins.map(coin => {
        if (coin.cid === cid) {
          return {...coin, active: value};
        }
        return coin;
      });
      setList(newCoins);
      getSimpleCoins(newCoins, setCoins);
    },
    [coins],
  );

  const onChangeText = useCallback(
    value => {
      if (!value || value.length === 0) {
        setList(coins);
        setSearch('');
      } else {
        setSearch(value);
        setList(
          coins.filter(item =>
            item.name
              .toLowerCase()
              .includes(
                value.toLowerCase() ||
                  item.symbol.toLowerCase().includes(value.toLowerCase()),
              ),
          ),
        );
      }
    },
    [coins],
  );

  const renderItem: ListRenderItem<CoinProps> = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{uri: item.icon}}
          resizeMode="contain"
          style={styles.iconStyle}
        />
        <View style={styles.contentWrapper}>
          <Text style={styles.name}>{item.name} </Text>
          <Text style={styles.symbol}>{item.symbol}</Text>
          <View style={styles.switch}>
            <Switch
              value={item.active}
              onToggle={value => onSwitchToggle(value, item.cid)}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <Screen style={styles.container} preset="fixed" unsafe>
      <TextField
        placeholder="Search"
        style={styles.textFieldContainer}
        value={search}
        onChangeText={onChangeText}
        autoComplete="off"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <FlatList
        data={list}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </Screen>
  );
};
