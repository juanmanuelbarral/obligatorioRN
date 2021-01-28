import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import RoundCornersImage from './RoundCornersImage';
import Text from './Text';
import { colors } from '../resources/colors';
import { dimens } from '../resources/dimens';
import imgBanner1 from '../assets/Banner-1.png';

const BANNER_HEIGHT_RATIO = 7 / 16;
const BANNER_MARGIN_HZ = dimens.screenMarginHz;

const Banner = () => {
  const window = useWindowDimensions();
  const bannerWidth = window.width - BANNER_MARGIN_HZ * 2;
  const bannerHeight = bannerWidth * BANNER_HEIGHT_RATIO;

  const imageStyle = {
    ...styles.imageStyle,
    height: bannerHeight,
    width: bannerWidth,
  };

  return (
    <View style={styles.containerStyle}>
      <RoundCornersImage source={imgBanner1} style={imageStyle} />

      <View style={styles.textContainerStyle}>
        <Text style={styles.textSecondaryStyle}>Product of the month</Text>
        <Text h2 style={styles.textPrimaryStyle}>Brazilian Bananas</Text>
      </View>
    </View>
  );
};

Banner.defaultProps = {};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: BANNER_MARGIN_HZ,
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
