import Colors from './Colors';
import Fonts from './Fonts';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android
const ApplicationStyles = {
  screen: {
    subContainer: {
      paddingHorizontal: 20,
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    rightTitle: {
      fontSize: Fonts.size.regular,
      fontFamily: Fonts.type.semiBold,
      color: Colors.primary800,
    },
  },
};

export default ApplicationStyles;
