import React from 'react';
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const HeaderIcon = ({ source, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image style={styles.iconStyle} source={source} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    height: 20,
    width: 20,
    marginHorizontal: 15,
  },
});

export default HeaderIcon;
