import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import BigButton from '../components/BigButton';
import Screen from '../components/Screen';
import Text from '../components/Text';
import TotalPrice from '../components/checkout/TotalPrice';
import Separator from '../components/Separator';
import { dimens } from '../resources/dimens';
import CheckoutItem from '../components/checkout/CheckoutItem';

const CheckoutScreen = ({ data, total, canCheckout, checkout }) => {
  return (
    <Screen style={styles.container}>
      <Separator hz={15} top={10} bottom={20}>
        <Text h1>Shopping Cart</Text>
      </Separator>

      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.listItemContainerStyle}>
            <CheckoutItem item={item} />
          </View>
        )}
        numColumns={2}
      />

      <TotalPrice price={total} />

      <Separator
        hz={dimens.screenMarginHz}
        top={10}
        bottom={30}
      >
        <BigButton
          title="Checkout"
          onPress={() => checkout()}
          disabled={!canCheckout}
        />
      </Separator>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  listItemContainerStyle: {
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 10,
  },
});

const makeCartData = (sections, cartQuantities) => {
  const allItems = sections.flatMap(it => it.items);
  let result = [];
  let total = 0;

  for (let itemKey in cartQuantities) {
    const item = allItems.find(it => it.item_id === itemKey);
    const quantity = cartQuantities[itemKey];
    if (item && quantity > 0) {
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
  const { cartItems, canCheckout } = cart;
  const { data, total } = makeCartData(items, cartItems);
  return { data, total, canCheckout };
};

const mapDispatchToProps = {
  checkout: actions.checkout,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutScreen);
