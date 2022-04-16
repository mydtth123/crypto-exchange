import React, {FC} from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParamList} from '@app/Navigation/AppNavigation';

import {Screen} from '@app/Components';

import styles from '@app/Screens/Home/Home.styles';
import IMAGE from '@app/Images';
import {CoinProps} from './Home.props';
import {COIN_LIST} from '@app/Constants/Constants';

export const HomeScreen: FC<
  NativeStackScreenProps<NavigatorParamList, 'home'>
> = ({navigation}) => {
  const renderHeader = () => (
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
        <TouchableOpacity style={styles.addCoinButton}>
          <Image source={IMAGE.PLUS} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </>
  );

  const renderItem: ListRenderItem<CoinProps> = ({item}) => {
    return (
      <TouchableOpacity style={styles.coinContainer}>
        <Image
          source={{uri: item.icon}}
          resizeMode="contain"
          style={styles.coinIcon}
        />
        <View>
          <Text style={styles.coinName}>{item.name}</Text>
          <Text style={styles.coinChanged}>
            {item?.currency ? item.currency : '-'} VND{' '}
            <Text>{item?.change}</Text>
          </Text>
        </View>
        <Text style={styles.coinPrice}>
          {item.amount} {item.symbol}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Screen style={styles.container} preset="fixed">
      <View style={styles.subContainer}>
        <FlatList
          data={COIN_LIST}
          keyExtractor={item => item.name}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </Screen>
  );
};
