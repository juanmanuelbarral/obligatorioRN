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
    height: 30,
    width: 80,
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 2,
  },
});

export default ButtonBorder;
