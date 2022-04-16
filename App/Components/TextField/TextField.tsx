import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import {Colors, Fonts, Metrics} from '@app/Themes';

const INPUT: TextStyle = {
  fontSize: Fonts.size.medium,
  fontFamily: Fonts.type.regular,
  color: Colors.basic900,
  minHeight: 40,
  borderWidth: 1,
  borderColor: Colors.basic500,
  borderRadius: 8,
  marginTop: 4,
  paddingHorizontal: Metrics.largeMargin,
};
const LABEL: TextStyle = {
  fontSize: Fonts.size.tiny,
  fontFamily: Fonts.type.bold,
  color: Colors.basic700,
  textTransform: 'uppercase',
  marginLeft: 6,
};

export interface TextFieldProps extends TextInputProps {
  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string;

  /**
   * The label text if no labelTx is provided.
   */
  label?: string;

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Optional style overrides for the label.
   */
  labelStyle?: StyleProp<TextStyle>;

  forwardedRef?: any;
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholder,
    label,
    style: styleOverride,
    inputStyle: inputStyleOverride,
    labelStyle: labelStyleOverride,
    forwardedRef,
    ...rest
  } = props;

  const inputStyles = [INPUT, inputStyleOverride];
  const labelStyles = [LABEL, labelStyleOverride];

  return (
    <View style={styleOverride}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        {...rest}
        style={inputStyles}
        ref={forwardedRef}
      />
    </View>
  );
}
