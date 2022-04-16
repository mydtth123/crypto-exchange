import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  largeSection: 32,
  baseMargin: 12,
  largeMargin: 16,
  doubleBaseMargin: 20,
  smallMargin: 5,
  regularMargin: 8,
  inputHeight: 48,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: 56,
  buttonRadius: 10,
  icons: {
    tiny: 19,
    small: 24,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;
