import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import RoundCornersImage from '../RoundCornersImage';
import Text from '../Text';

const CheckoutItem = ({ item }) => {
  const { name, price, image, quantity } = item;
  const window = useWindowDimensions();
  const width = window.width * 0.4;

  const containerStyle = { ...styles.containerStyle, width };
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
