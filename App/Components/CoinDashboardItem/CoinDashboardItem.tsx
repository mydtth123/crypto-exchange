import React from 'react';
import {
  TextStyle,
  ViewStyle,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageStyle,
} from 'react-native';
import {Colors, Fonts, Metrics} from '@app/Themes';
import {CoinProps} from '@app/Screens/Home/Home.props';

const COIN_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  minHeight: 64,
  paddingHorizontal: Metrics.doubleBaseMargin,
  backgroundColor: Colors.basic200,
  borderRadius: Metrics.regularMargin,
};
const COIN_ICON: ImageStyle = {
  width: Metrics.largeSection,
  height: Metrics.largeSection,
  marginRight: Metrics.largeMargin,
  borderRadius: Metrics.largeSection / 2,
};
const COIN_NAME: TextStyle = {
  fontSize: Fonts.size.medium,
  fontFamily: Fonts.type.semiBold,
  color: Colors.basic900,
};
const COIN_PRICE: TextStyle = {
  fontSize: Fonts.size.regular,
  fontFamily: Fonts.type.bold,
  color: Colors.basic900,
  marginLeft: 'auto',
};
const COIN_PRICE_CHANGE: TextStyle = {
  fontSize: Fonts.size.small,
  fontFamily: Fonts.type.regular,
  color: Colors.basic600,
};
const CHANGED: TextStyle = {
  color: Colors.primary900,
};
const CHANGED_RED: TextStyle = {
  color: Colors.error,
};

export function CoinDashboardItem({coin}: {coin: CoinProps}) {
  const {icon, name, symbol, amount, currency, change} = coin;

  return (
    <TouchableOpacity style={COIN_CONTAINER}>
      <Image source={{uri: icon}} resizeMode="contain" style={COIN_ICON} />
      <View>
        <Text style={COIN_NAME}>{name}</Text>
        <Text style={COIN_PRICE_CHANGE}>
          {currency
            ? currency.toLocaleString('vn-VN', {
                style: 'currency',
                currency: 'VND',
              })
            : '-'}
          <Text style={[CHANGED, change && change < 0 ? CHANGED_RED : null]}>
            {change ? ` ${change?.toFixed(2)}%` : ''}
          </Text>
        </Text>
      </View>
      <Text style={COIN_PRICE}>
        {amount} {symbol}
      </Text>
    </TouchableOpacity>
  );
}
