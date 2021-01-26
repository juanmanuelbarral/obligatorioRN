import React from 'react';
import { StyleSheet, Image } from 'react-native';

const RoundImage = ({ source }) => {
  return <Image style={styles.imageStyle} source={source} />;
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});

export default RoundImage;
