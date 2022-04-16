import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '@app/Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walletNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.basic200,
    borderRadius: Metrics.regularMargin,
    height: Metrics.largeSection,
    paddingHorizontal: Metrics.baseMargin,
  },
  dot: {
    width: Metrics.regularMargin,
    height: Metrics.regularMargin,
    borderRadius: 4,
    backgroundColor: Colors.primary900,
    marginRight: Metrics.baseMargin,
  },
  walletName: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.bold,
    color: Colors.basic900,
  },
  userIconContainer: {
    width: Metrics.largeSection,
    height: Metrics.largeSection,
    backgroundColor: Colors.basic200,
    borderRadius: Metrics.regularMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },

  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
    paddingHorizontal: Metrics.doubleBaseMargin,
    backgroundColor: Colors.basic200,
    borderRadius: Metrics.regularMargin,
  },
  coinIcon: {
    width: Metrics.largeSection,
    height: Metrics.largeSection,
    marginRight: Metrics.largeMargin,
  },
  coinName: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.semiBold,
    color: Colors.basic900,
  },
  coinChanged: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.regular,
    color: Colors.basic600,
  },
  coinPrice: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold,
    color: Colors.basic900,
    marginLeft: 'auto',
  },
  separator: {
    height: Metrics.regularMargin,
  },

  topAssetsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Metrics.smallMargin,
    marginTop: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.regularMargin,
  },
  assetsText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold,
    color: Colors.basic900,
  },
  addCoinButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
});
