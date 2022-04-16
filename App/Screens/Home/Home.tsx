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
import {formatMoney} from '@app/Constants/Constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const HomeScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'home'>
> = ({navigation}) => {
  const {coins, setCoins} = useContext(AppContext);
  const insets = useSafeAreaInsets();

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
      <FlatList
        data={dataFlatList}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        ListHeaderComponent={
          <FlatListHeader navigation={navigation} coins={dataFlatList} />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        onRefresh={() => getSimpleCoins(coins, setCoins)}
        refreshing={false}
        contentContainerStyle={[
          styles.contentContainer,
          {paddingBottom: insets.bottom},
        ]}
      />
    </Screen>
  );
};

const FlatListHeader = memo(
  ({
    navigation,
    coins,
  }: {
    navigation: NativeStackNavigationProp<
      NavigatorParamList,
      'home',
      undefined
    >;
    coins: CoinProps[];
  }) => {
    const walletTotal: {
      vnd: number;
      usd: number;
    } = useMemo(() => {
      let totalVnd = 0;
      let totalUsd = 0;
      coins.forEach(coin => {
        if (!coin?.vnd || !coin?.usd) return;

        totalVnd += coin.amount * coin?.vnd;
        totalUsd += coin.amount * coin?.usd;
      });
      return {
        vnd: totalVnd,
        usd: totalUsd,
      };
    }, [coins]);

    const onAddMorePress = useCallback(() => {
      navigation.navigate('coins-modal');
    }, [navigation]);

    return (
      <View style={{overflow: 'hidden'}}>
        <Image
          source={IMAGE.HOME_BANNER}
          resizeMode="contain"
          style={styles.homeBanner}
        />
        <View style={styles.headerContainer}>
          <View style={styles.walletNameContainer}>
            <View style={styles.dot} />
            <Text style={styles.walletName}>Ronin Wallet</Text>
          </View>
          <TouchableOpacity style={styles.userIconContainer}>
            <Image source={IMAGE.USER} resizeMode="contain" />
          </TouchableOpacity>
        </View>
        <View style={styles.walletBadgeContainer}>
          <View style={styles.walletBadgeHeader}>
            <Text style={styles.walletBadgeName}>My Wallet</Text>
            <Text style={styles.walletBadgeNumber}> (7300 3777 3888 3334)</Text>
            <TouchableOpacity style={styles.walletBadgeCopy}>
              <Image source={IMAGE.COPY} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View style={styles.lineThrough} />
          <View style={styles.walletBadgeWrapper}>
            <View>
              <Text
                style={styles.totalBalanceText}
                numberOfLines={1}
                adjustsFontSizeToFit>
                {formatMoney(walletTotal.usd)} USD
              </Text>
              <Text
                style={styles.convertBalanceText}
                numberOfLines={1}
                adjustsFontSizeToFit>
                {formatMoney(walletTotal.vnd)} VND
              </Text>
            </View>
            <Image source={IMAGE.WHITE_LOGO} resizeMode="contain" />
          </View>
        </View>
        <View style={styles.topAssetsContainer}>
          <Text style={styles.assetsText}>Assets</Text>
          <TouchableOpacity
            style={styles.addCoinButton}
            onPress={onAddMorePress}>
            <Image source={IMAGE.PLUS} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);
FlatListHeader.displayName = 'FlatListHeader';
