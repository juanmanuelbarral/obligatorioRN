import React from 'react';
import { StyleSheet, Image } from 'react-native';

const RoundCornersImage = ({ source, style }) => {
  return <Image style={[styles.imageStyle, style]} source={source} />;
};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 7,
  },
});

export default RoundCornersImage;
