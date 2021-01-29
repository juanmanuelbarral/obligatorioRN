import React from 'react';
import { StyleSheet, View } from 'react-native';
import RoundCornersImage from './RoundCornersImage';
import Text from './Text';
import { colors } from '../resources/colors';
import imgPlaceholder from '../assets/Banner-1.png';

const BANNER_HEIGHT_RATIO = 7 / 16;

const Banner = ({ title, info, image, bannerWidth }) => {
  const bannerHeight = bannerWidth * BANNER_HEIGHT_RATIO;

  const imageStyle = {
    ...styles.imageStyle,
    height: bannerHeight,
    width: bannerWidth,
  };

  return (
    <View style={styles.containerStyle}>
      <RoundCornersImage source={image} style={imageStyle} />

      <View style={styles.textContainerStyle}>
        <Text style={styles.textSecondaryStyle}>{info}</Text>
        <Text h2 style={styles.textPrimaryStyle}>{title}</Text>
      </View>
    </View>
  );
};

Banner.defaultProps = {
  bannerWidth: 200,
  title: '',
  info: '',
  image: imgPlaceholder,
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'flex-end',
  },
  imageStyle: {
    height: 20,
    width: 30,
    backgroundColor: colors.blueGrey200_a40,
    borderRadius: 7,
  },
  textContainerStyle: {
    position: 'absolute',
    padding: 10,
  },
  textPrimaryStyle: {
    color: colors.white,
    letterSpacing: 1.5,
  },
  textSecondaryStyle: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '300',
  },
});

export default Banner;
