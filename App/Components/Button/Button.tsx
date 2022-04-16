import React from 'react';
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Colors, Fonts, Metrics} from '@app/Themes';

const BUTTON: ViewStyle = {
  minHeight: 40,
  backgroundColor: Colors.primary900,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  paddingHorizontal: Metrics.doubleBaseMargin,
};
const BUTTON_DISABLED: ViewStyle = {
  backgroundColor: Colors.primary300,
};
const LABEL: TextStyle = {
  fontSize: Fonts.size.medium,
  fontFamily: Fonts.type.semiBold,
  color: Colors.white,
  lineHeight: 20,
};

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * The label text.
   */
  label?: string;

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Optional style overrides for the label.
   */
  labelStyle?: StyleProp<TextStyle>;

  forwardedRef?: any;
}

/**
 * A component which has a label and an input together.
 */
export function Button(props: ButtonProps) {
  const {
    label,
    style: styleOverride,
    labelStyle: labelStyleOverride,
    forwardedRef,
    ...rest
  } = props;

  const actualStyle = [
    BUTTON,
    rest.disabled ? BUTTON_DISABLED : null,
    styleOverride,
  ];
  const labelStyles = [LABEL, labelStyleOverride];

  return (
    <TouchableOpacity style={actualStyle} {...rest}>
      <Text style={labelStyles}>{label}</Text>
    </TouchableOpacity>
  );
}
