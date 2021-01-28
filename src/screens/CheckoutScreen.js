import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import grapefruitImg from '../assets/Grapefruit-2.png';
import RoundCornersImage from '../components/RoundCornersImage';

const CheckoutScreen = ({ data, total, checkout }) => {
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
      <Text>{`TOTAL: ${total}`}</Text>
      <Button title="Checkout" onPress={() => checkout()} />
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
  let total = 0;

  for (let itemKey in cartQuantities) {
    const item = allItems.find(it => it.item_id === itemKey);
    if (item) {
      const quantity = cartQuantities[itemKey];
      total += item.price * quantity;
      result.push({
        key: item.item_id,
        name: item.name,
        price: item.price,
        image: item.imgBig,
        quantity,
      });
    }
  }

  return { data: result, total };
};

const mapStateToProps = state => {
  const { store, cart } = state;
  const { items } = store;
  const { data, total } = makeCartData(items, cart);
  return { data, total };
};

const mapDispatchToProps = {
  checkout: actions.checkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);
