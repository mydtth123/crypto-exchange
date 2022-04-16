import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '@app/Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  bannerContainer: {
    alignItems: 'center',
    marginBottom: Metrics.section,
  },
  title: {
    fontSize: Fonts.size.h3,
    fontFamily: Fonts.type.bold,
    color: Colors.basic900,
    marginTop: Metrics.section,
    marginBottom: Metrics.regularMargin,
  },
  description: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.regular,
    color: Colors.basic900,
  },
  bannerWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: Metrics.doubleSection,
    paddingTop: 34,
  },
  banner: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    marginTop: Metrics.section,
  },
});
