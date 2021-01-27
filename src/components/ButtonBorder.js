import React from 'react';
import { StyleSheet, View } from 'react-native';

const ButtonBorder = ({ children, color }) => {
  const colorStyle = { borderColor: color };
  return <View style={[styles.containerStyle, colorStyle]}>{children}</View>;
};

ButtonBorder.defaultProps = {
  color: 'blue',
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 32,
    width: 82,
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
  },
});

export default ButtonBorder;
