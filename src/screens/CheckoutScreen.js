import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import grapefruitImg from '../assets/Grapefruit-2.png';
import RoundCornersImage from '../components/RoundCornersImage';

const CheckoutScreen = ({ data }) => {
  return (
    <View>
      <Text>CheckoutScreen</Text>
      <RoundCornersImage
        source={grapefruitImg}
        style={styles.roundedCornersImage}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Text>{`${item.name} ${item.quantity}`}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  roundedCornersImage: {
    height: 120,
    width: 120,
  },
});

const makeCartData = (items, cartQuantities) => {
  const allItems = items.flatMap(it => it.items);
  let result = [];

  for (let itemKey in cartQuantities) {
    const item = allItems.find(it => it.item_id === itemKey);
    if (item) {
      const quantity = cartQuantities[itemKey];
      result.push({
        key: item.item_id,
        name: item.name,
        price: item.price,
        image: item.imgBig,
        quantity,
      });
    }
  }

  console.log(result);
  return result;
};

const mapStateToProps = state => {
  const { store, cart } = state;
  const { items } = store;
  return { data: makeCartData(items, cart) };
};

export default connect(mapStateToProps)(CheckoutScreen);
