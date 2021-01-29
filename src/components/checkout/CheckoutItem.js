import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import RoundCornersImage from '../RoundCornersImage';
import Text from '../Text';

const WIDTH_PERCENT = 0.44;
const MARGIN_HZ_PERCERNT = (0.5 - WIDTH_PERCENT) / 2;

const CheckoutItem = ({ item }) => {
  const { name, price, image, quantity } = item;
  const { width: windowWidth } = useWindowDimensions();
  const width = windowWidth * WIDTH_PERCENT;
  const marginHorizontal = windowWidth * MARGIN_HZ_PERCERNT;

  const containerStyle = { ...styles.containerStyle, width, marginHorizontal };
  const imageStyle = { ...styles.imageStyle, width, height: width };

  return (
    <View style={containerStyle}>
      <RoundCornersImage
        source={image}
        style={imageStyle}
      />

      <View style={styles.textContainer}>
        <View style={styles.nameUnitsContainer}>
          <Text h3>{name}</Text>
          <Text grey>{`${quantity} units`}</Text>
        </View>

        <Text grey>{`$${price}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: 150,
  },
  nameUnitsContainer: {
    flex: 1,
    marginRight: 5,
  },
  imageStyle: {
    height: 150,
    width: 150,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginTop: 10,
  },
});

export default CheckoutItem;
