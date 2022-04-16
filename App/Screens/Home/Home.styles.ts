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

  contentContainer: {
    paddingHorizontal: Metrics.doubleBaseMargin,
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

  walletBadgeContainer: {
    backgroundColor: Colors.primary900,
    padding: Metrics.doubleBaseMargin,
    borderRadius: Metrics.largeMargin,
    marginTop: Metrics.doubleBaseMargin,
  },
  walletBadgeName: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.semiBold,
    color: Colors.white,
  },
  lineThrough: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary400,
    marginVertical: Metrics.baseMargin,
  },
  walletBadgeWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  totalBalanceText: {
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.bold,
    color: Colors.white,
  },
  convertBalanceText: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.semiBold,
    color: Colors.primary300,
    marginTop: 4,
  },
  walletBadgeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletBadgeNumber: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.regular,
    color: Colors.primary300,
  },
  walletBadgeCopy: {
    marginLeft: 'auto',
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeBanner: {
    ...StyleSheet.absoluteFillObject,
  },
});
