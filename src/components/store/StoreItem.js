import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddButton from '../AddButton';
import QuantityControl from '../QuantityControl';
import RoundImage from '../RoundImage';
import Text from '../Text';

const StoreItem = ({ item }) => {
  const { name, price, imgSmall } = item;
  const quantity = 0;
  //TODO: connect with redux store

  return (
    <View style={styles.containerStyle}>
      <RoundImage source={imgSmall} />

      <View style={styles.textContainer}>
        <Text h3>{name}</Text>
        <Text grey>{`$${price}`}</Text>
      </View>

      {quantity === 0
        ? <AddButton />
        : <QuantityControl quantity={quantity} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  textContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
    margin: 7,
  }
});

export default StoreItem;
