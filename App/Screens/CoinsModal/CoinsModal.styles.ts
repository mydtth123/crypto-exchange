import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '@app/Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  textFieldContainer: {
    paddingBottom: Metrics.baseMargin,
    borderBottomWidth: 1,
    borderBottomColor: Colors.basic200,
    paddingHorizontal: Metrics.doubleBaseMargin,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Metrics.doubleBaseMargin,
  },
  iconStyle: {
    width: Metrics.largeSection,
    height: Metrics.largeSection,
    borderRadius: Metrics.largeSection / 2,
    marginRight: Metrics.largeMargin,
  },
  contentWrapper: {
    paddingVertical: Metrics.doubleBaseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.basic200,
  },
  name: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.semiBold,
    color: Colors.basic900,
  },
  symbol: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.regular,
    color: Colors.primary400,
  },

  switch: {
    marginLeft: 'auto',
    marginRight: Metrics.doubleBaseMargin,
  },
});
