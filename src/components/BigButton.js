import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import { colors } from '../resources/colors';

const BigButton = (props) => {
  const { title, onPress, disabled, style, textStyle } = props;
  const buttonStyle = [styles.buttonContainerStyle, style];

  if (disabled) {
    buttonStyle.push(styles.disabledStyle);
  }

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        h2
        style={[styles.buttonTextStyle, textStyle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainerStyle: {
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blue600,
    borderRadius: 33,
  },
  buttonTextStyle: {
    color: colors.white,
  },
  disabledStyle: {
    backgroundColor: colors.grey600,
    opacity: 0.5,
  },
});

export default BigButton;
