import React, {
  FC,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {NavigatorParamList} from '@app/Navigation/AppNavigation';

import {Screen} from '@app/Components';
import IMAGE from '@app/Images';
import {CoinProps} from './Home.props';
import {getSimpleCoins} from '@app/Services/Api';
import {AppContext} from '@app/Services/AppProvider';
import {CoinDashboardItem} from '@app/Components/CoinDashboardItem/CoinDashboardItem';
import styles from '@app/Screens/Home/Home.styles';

export const HomeScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'home'>
> = ({navigation}) => {
  const {coins, setCoins} = useContext(AppContext);

  const dataFlatList = useMemo(
    () => coins.filter(coin => coin.active),
    [coins],
  );

  useEffect(() => {
    if (dataFlatList.length > 0) {
      getSimpleCoins(coins, setCoins);
    }
  }, []);

  const renderItem: ListRenderItem<CoinProps> = ({item}) => {
    return <CoinDashboardItem coin={item} />;
  };

  return (
    <Screen style={styles.container} preset="fixed">
      <View style={styles.subContainer}>
        <FlatList
          data={dataFlatList}
          keyExtractor={item => item.name}
          renderItem={renderItem}
          ListHeaderComponent={<FlatListHeader navigation={navigation} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          onRefresh={() => getSimpleCoins(coins, setCoins)}
          refreshing={false}
        />
      </View>
    </Screen>
  );
};

const FlatListHeader = memo(
  ({
    navigation,
  }: {
    navigation: NativeStackNavigationProp<
      NavigatorParamList,
      'home',
      undefined
    >;
  }) => {
    const onAddMorePress = useCallback(() => {
      navigation.navigate('coins-modal');
    }, [navigation]);

    return (
      <>
        <View style={styles.headerContainer}>
          <View style={styles.walletNameContainer}>
            <View style={styles.dot} />
            <Text style={styles.walletName}>Ronin Wallet</Text>
          </View>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image source={IMAGE.USER} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={styles.topAssetsContainer}>
          <Text style={styles.assetsText}>Assets</Text>
          <TouchableOpacity
            style={styles.addCoinButton}
            onPress={onAddMorePress}>
            <Image source={IMAGE.PLUS} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </>
    );
  },
);
FlatListHeader.displayName = 'FlatListHeader';
