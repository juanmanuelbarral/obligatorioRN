import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import { colors } from '../resources/colors';

const BigButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainerStyle, style]}
      onPress={onPress}
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
});

export default BigButton;
